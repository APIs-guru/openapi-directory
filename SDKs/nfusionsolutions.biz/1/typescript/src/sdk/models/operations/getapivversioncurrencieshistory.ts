import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionCurrenciesHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionCurrenciesHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pairs" })
  pairs: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionCurrenciesHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionCurrenciesHistoryPathParams;

  @Metadata()
  queryParams: GetApiVVersionCurrenciesHistoryQueryParams;
}


export class GetApiVVersionCurrenciesHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IntervalCollectionResponse })
  intervalCollectionResponses?: shared.IntervalCollectionResponse[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
