import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsSpotPerformancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSpotPerformanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metals" })
  metals: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" })
  unitofmeasure?: shared.UnitOfMeasureEnum;
}


export class GetApiVVersionMetalsSpotPerformanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsSpotPerformancePathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsSpotPerformanceQueryParams;
}


export class GetApiVVersionMetalsSpotPerformanceResponse extends SpeakeasyBase {
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
