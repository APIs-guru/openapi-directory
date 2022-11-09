import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeStatsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeStatsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeStatsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeStatsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeStatsSecurityOption2;
}


export class GetLinodeStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeStatsPathParams;

  @Metadata()
  security: GetLinodeStatsSecurity;
}


export class GetLinodeStatsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linodeStats?: shared.LinodeStats;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeStatsDefaultApplicationJsonObject?: GetLinodeStatsDefaultApplicationJson;
}
