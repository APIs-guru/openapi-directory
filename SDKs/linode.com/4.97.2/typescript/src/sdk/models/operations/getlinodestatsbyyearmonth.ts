import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinodeStatsByYearMonthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetLinodeStatsByYearMonthSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLinodeStatsByYearMonthDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeStatsByYearMonthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLinodeStatsByYearMonthPathParams;

  @SpeakeasyMetadata()
  security: GetLinodeStatsByYearMonthSecurity;
}


export class GetLinodeStatsByYearMonthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linodeStats?: shared.LinodeStats;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLinodeStatsByYearMonthDefaultApplicationJsonObject?: GetLinodeStatsByYearMonthDefaultApplicationJson;
}
