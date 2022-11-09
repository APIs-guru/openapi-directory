import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMediaEncoderPathRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  mediaEncoderPathDto?: shared.MediaEncoderPathDto;

  @Metadata({ data: "request, media_type=application/json" })
  mediaEncoderPathDto1?: shared.MediaEncoderPathDto;

  @Metadata({ data: "request, media_type=text/json" })
  mediaEncoderPathDto2?: shared.MediaEncoderPathDto;
}


export class UpdateMediaEncoderPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateMediaEncoderPathRequest extends SpeakeasyBase {
  @Metadata()
  request: UpdateMediaEncoderPathRequests;

  @Metadata()
  security: UpdateMediaEncoderPathSecurity;
}


export class UpdateMediaEncoderPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
