import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMediaEncoderPathRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  mediaEncoderPathDto?: shared.MediaEncoderPathDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  mediaEncoderPathDto1?: shared.MediaEncoderPathDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  mediaEncoderPathDto2?: shared.MediaEncoderPathDto;
}


export class UpdateMediaEncoderPathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateMediaEncoderPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UpdateMediaEncoderPathRequests;

  @SpeakeasyMetadata()
  security: UpdateMediaEncoderPathSecurity;
}


export class UpdateMediaEncoderPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
