import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AcceptEntityTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class AcceptEntityTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class AcceptEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AcceptEntityTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AcceptEntityTransferPathParams;

  @SpeakeasyMetadata()
  security: AcceptEntityTransferSecurity;
}


export class AcceptEntityTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  acceptEntityTransfer200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  acceptEntityTransferDefaultApplicationJsonObject?: AcceptEntityTransferDefaultApplicationJson;
}
