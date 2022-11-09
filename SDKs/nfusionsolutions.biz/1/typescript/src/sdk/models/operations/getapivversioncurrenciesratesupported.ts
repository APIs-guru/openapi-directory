import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionCurrenciesRateSupportedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionCurrenciesRateSupportedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionCurrenciesRateSupportedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionCurrenciesRateSupportedPathParams;

  @Metadata()
  queryParams: GetApiVVersionCurrenciesRateSupportedQueryParams;
}


export class GetApiVVersionCurrenciesRateSupportedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getApiVVersionCurrenciesRateSupported200ApplicationJsonStrings?: string[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
