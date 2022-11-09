import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeTransferByYearMonthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetLinodeTransferByYearMonthSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeTransferByYearMonthSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeTransferByYearMonthSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeTransferByYearMonthSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeTransferByYearMonthSecurityOption2;
}


export class GetLinodeTransferByYearMonthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeTransferByYearMonthPathParams;

  @Metadata()
  security: GetLinodeTransferByYearMonthSecurity;
}


export class GetLinodeTransferByYearMonthDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeTransferByYearMonthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeTransferByYearMonth200ApplicationJsonAny?: any;

  @Metadata()
  getLinodeTransferByYearMonthDefaultApplicationJsonObject?: GetLinodeTransferByYearMonthDefaultApplicationJson;
}
