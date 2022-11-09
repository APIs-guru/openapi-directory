import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeTransferSecurityOption2;
}


export class GetLinodeTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeTransferPathParams;

  @Metadata()
  security: GetLinodeTransferSecurity;
}


export class GetLinodeTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeTransfer200ApplicationJsonAny?: any;

  @Metadata()
  getLinodeTransferDefaultApplicationJsonObject?: GetLinodeTransferDefaultApplicationJson;
}
