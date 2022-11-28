import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVVersionMetalsBenchmarkHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsBenchmarkHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=historicalfx" })
  historicalfx?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metals" })
  metals: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" })
  unitofmeasure?: shared.UnitOfMeasureEnum;
}


export class GetApiVVersionMetalsBenchmarkHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiVVersionMetalsBenchmarkHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiVVersionMetalsBenchmarkHistoryQueryParams;
}


export class GetApiVVersionMetalsBenchmarkHistoryResponse extends SpeakeasyBase {
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
