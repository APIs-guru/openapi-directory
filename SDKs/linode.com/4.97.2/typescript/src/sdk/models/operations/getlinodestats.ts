import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinodeStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeStatsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLinodeStatsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLinodeStatsPathParams;

  @SpeakeasyMetadata()
  security: GetLinodeStatsSecurity;
}


export class GetLinodeStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linodeStats?: shared.LinodeStats;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLinodeStatsDefaultApplicationJsonObject?: GetLinodeStatsDefaultApplicationJson;
}
