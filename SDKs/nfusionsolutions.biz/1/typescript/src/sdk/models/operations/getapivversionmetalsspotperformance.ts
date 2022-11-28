import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVVersionMetalsSpotPerformancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSpotPerformanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metals" })
  metals: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" })
  unitofmeasure?: shared.UnitOfMeasureEnum;
}


export class GetApiVVersionMetalsSpotPerformanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiVVersionMetalsSpotPerformancePathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiVVersionMetalsSpotPerformanceQueryParams;
}


export class GetApiVVersionMetalsSpotPerformanceResponse extends SpeakeasyBase {
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
