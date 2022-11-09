import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsBenchmarkHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsBenchmarkHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=historicalfx" })
  historicalfx?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metals" })
  metals: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" })
  unitofmeasure?: shared.UnitOfMeasureEnum;
}


export class GetApiVVersionMetalsBenchmarkHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsBenchmarkHistoryPathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsBenchmarkHistoryQueryParams;
}


export class GetApiVVersionMetalsBenchmarkHistoryResponse extends SpeakeasyBase {
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
