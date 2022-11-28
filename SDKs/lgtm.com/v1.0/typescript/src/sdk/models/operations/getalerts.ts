import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis-id" })
  analysisId: string;
}


export class GetAlertsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excluded-files" })
  excludedFiles?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sarif-version" })
  sarifVersion?: string;
}


export class GetAlertsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetAlertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlertsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAlertsQueryParams;

  @SpeakeasyMetadata()
  security: GetAlertsSecurity;
}


export class GetAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlerts200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  getAlerts200ApplicationSarifPlusJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  getAlerts200TextCsvString?: string;
}
