import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteServiceTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DeleteServiceTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteServiceTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteServiceTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteServiceTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteServiceTransferSecurityOption2;
}


export class DeleteServiceTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteServiceTransferPathParams;

  @Metadata()
  security: DeleteServiceTransferSecurity;
}


export class DeleteServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteServiceTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteServiceTransfer200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteServiceTransferDefaultApplicationJsonObject?: DeleteServiceTransferDefaultApplicationJson;
}
