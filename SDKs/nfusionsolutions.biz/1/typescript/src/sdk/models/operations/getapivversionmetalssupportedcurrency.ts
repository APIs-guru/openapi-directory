import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsSupportedCurrencyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSupportedCurrencyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionMetalsSupportedCurrencyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsSupportedCurrencyPathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsSupportedCurrencyQueryParams;
}


export class GetApiVVersionMetalsSupportedCurrencyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getApiVVersionMetalsSupportedCurrency200ApplicationJsonStrings?: string[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
