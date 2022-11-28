import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVVersionCurrenciesSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionCurrenciesSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pairs" })
  pairs: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionCurrenciesSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiVVersionCurrenciesSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiVVersionCurrenciesSummaryQueryParams;
}


export class GetApiVVersionCurrenciesSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SummaryResponse })
  summaryResponses?: shared.SummaryResponse[];
}
