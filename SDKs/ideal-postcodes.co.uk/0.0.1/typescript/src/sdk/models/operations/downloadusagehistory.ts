import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadUsageHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class DownloadUsageHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class DownloadUsageHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class DownloadUsageHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadUsageHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadUsageHistoryQueryParams;

  @SpeakeasyMetadata()
  security: DownloadUsageHistorySecurity;
}


export class DownloadUsageHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadUsageHistory200TextCsvString?: string;

  @SpeakeasyMetadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
