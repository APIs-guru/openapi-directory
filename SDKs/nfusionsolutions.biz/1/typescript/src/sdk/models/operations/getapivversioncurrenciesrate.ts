import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionCurrenciesRatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionCurrenciesRateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pairs" })
  pairs: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionCurrenciesRateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionCurrenciesRatePathParams;

  @Metadata()
  queryParams: GetApiVVersionCurrenciesRateQueryParams;
}


export class GetApiVVersionCurrenciesRateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata({ elemType: shared.RateResponse })
  rateResponses?: shared.RateResponse[];

  @Metadata()
  statusCode: number;
}
