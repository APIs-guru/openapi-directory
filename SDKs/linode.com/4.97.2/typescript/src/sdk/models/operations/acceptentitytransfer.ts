import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AcceptEntityTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class AcceptEntityTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AcceptEntityTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AcceptEntityTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AcceptEntityTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AcceptEntityTransferSecurityOption2;
}


export class AcceptEntityTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AcceptEntityTransferPathParams;

  @Metadata()
  security: AcceptEntityTransferSecurity;
}


export class AcceptEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AcceptEntityTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  acceptEntityTransfer200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  acceptEntityTransferDefaultApplicationJsonObject?: AcceptEntityTransferDefaultApplicationJson;
}
