import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUpdatedMediaRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.MediaUpdateInfoDto })
  mediaUpdateInfoDtos?: shared.MediaUpdateInfoDto[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.MediaUpdateInfoDto })
  mediaUpdateInfoDtos1?: shared.MediaUpdateInfoDto[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.MediaUpdateInfoDto })
  mediaUpdateInfoDtos2?: shared.MediaUpdateInfoDto[];
}


export class PostUpdatedMediaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostUpdatedMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PostUpdatedMediaRequests;

  @SpeakeasyMetadata()
  security: PostUpdatedMediaSecurity;
}


export class PostUpdatedMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
