import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUpdatedMediaRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.MediaUpdateInfoDto })
  mediaUpdateInfoDtos?: shared.MediaUpdateInfoDto[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.MediaUpdateInfoDto })
  mediaUpdateInfoDtos1?: shared.MediaUpdateInfoDto[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.MediaUpdateInfoDto })
  mediaUpdateInfoDtos2?: shared.MediaUpdateInfoDto[];
}


export class PostUpdatedMediaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostUpdatedMediaRequest extends SpeakeasyBase {
  @Metadata()
  request: PostUpdatedMediaRequests;

  @Metadata()
  security: PostUpdatedMediaSecurity;
}


export class PostUpdatedMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
