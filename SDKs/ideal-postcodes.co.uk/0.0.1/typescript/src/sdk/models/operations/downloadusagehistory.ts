import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadUsageHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class DownloadUsageHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class DownloadUsageHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class DownloadUsageHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadUsageHistoryPathParams;

  @Metadata()
  queryParams: DownloadUsageHistoryQueryParams;

  @Metadata()
  security: DownloadUsageHistorySecurity;
}


export class DownloadUsageHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadUsageHistory200TextCsvString?: string;

  @Metadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @Metadata()
  statusCode: number;
}
