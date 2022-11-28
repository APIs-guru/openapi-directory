import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AcceptServiceTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class AcceptServiceTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class AcceptServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AcceptServiceTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AcceptServiceTransferPathParams;

  @SpeakeasyMetadata()
  security: AcceptServiceTransferSecurity;
}


export class AcceptServiceTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  acceptServiceTransfer200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  acceptServiceTransferDefaultApplicationJsonObject?: AcceptServiceTransferDefaultApplicationJson;
}
