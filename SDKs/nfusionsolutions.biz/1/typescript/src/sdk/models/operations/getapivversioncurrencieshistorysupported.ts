import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionCurrenciesHistorySupportedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionCurrenciesHistorySupportedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionCurrenciesHistorySupportedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionCurrenciesHistorySupportedPathParams;

  @Metadata()
  queryParams: GetApiVVersionCurrenciesHistorySupportedQueryParams;
}


export class GetApiVVersionCurrenciesHistorySupportedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getApiVVersionCurrenciesHistorySupported200ApplicationJsonStrings?: string[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
