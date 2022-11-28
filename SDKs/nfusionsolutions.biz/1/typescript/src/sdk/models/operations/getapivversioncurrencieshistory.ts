import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVVersionCurrenciesHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionCurrenciesHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pairs" })
  pairs: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionCurrenciesHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiVVersionCurrenciesHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiVVersionCurrenciesHistoryQueryParams;
}


export class GetApiVVersionCurrenciesHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IntervalCollectionResponse })
  intervalCollectionResponses?: shared.IntervalCollectionResponse[];

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
