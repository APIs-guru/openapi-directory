import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=analysis-id" })
  analysisId: string;
}


export class GetAlertsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excluded-files" })
  excludedFiles?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sarif-version" })
  sarifVersion?: string;
}


export class GetAlertsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetAlertsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlertsPathParams;

  @Metadata()
  queryParams: GetAlertsQueryParams;

  @Metadata()
  security: GetAlertsSecurity;
}


export class GetAlertsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAlerts200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  getAlerts200ApplicationSarifPlusJsonObject?: Map<string, any>;

  @Metadata()
  getAlerts200TextCsvString?: string;
}
