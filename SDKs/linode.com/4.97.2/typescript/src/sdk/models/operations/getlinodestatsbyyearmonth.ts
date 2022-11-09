import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeStatsByYearMonthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetLinodeStatsByYearMonthSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeStatsByYearMonthSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeStatsByYearMonthSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeStatsByYearMonthSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeStatsByYearMonthSecurityOption2;
}


export class GetLinodeStatsByYearMonthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeStatsByYearMonthPathParams;

  @Metadata()
  security: GetLinodeStatsByYearMonthSecurity;
}


export class GetLinodeStatsByYearMonthDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeStatsByYearMonthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linodeStats?: shared.LinodeStats;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeStatsByYearMonthDefaultApplicationJsonObject?: GetLinodeStatsByYearMonthDefaultApplicationJson;
}
