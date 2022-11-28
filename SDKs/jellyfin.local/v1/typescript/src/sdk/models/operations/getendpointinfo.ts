import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEndpointInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetEndpointInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetEndpointInfoSecurity;
}


export class GetEndpointInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endPointInfo?: shared.EndPointInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
