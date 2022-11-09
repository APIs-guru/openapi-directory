import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteEntityTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DeleteEntityTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteEntityTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteEntityTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteEntityTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteEntityTransferSecurityOption2;
}


export class DeleteEntityTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteEntityTransferPathParams;

  @Metadata()
  security: DeleteEntityTransferSecurity;
}


export class DeleteEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteEntityTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteEntityTransfer200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteEntityTransferDefaultApplicationJsonObject?: DeleteEntityTransferDefaultApplicationJson;
}
