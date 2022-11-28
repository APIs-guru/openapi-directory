import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVVersionCurrenciesRateSupportedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionCurrenciesRateSupportedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionCurrenciesRateSupportedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiVVersionCurrenciesRateSupportedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiVVersionCurrenciesRateSupportedQueryParams;
}


export class GetApiVVersionCurrenciesRateSupportedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiVVersionCurrenciesRateSupported200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
