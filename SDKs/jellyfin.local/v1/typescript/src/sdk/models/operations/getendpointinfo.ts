import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEndpointInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetEndpointInfoRequest extends SpeakeasyBase {
  @Metadata()
  security: GetEndpointInfoSecurity;
}


export class GetEndpointInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  endPointInfo?: shared.EndPointInfo;

  @Metadata()
  statusCode: number;
}
