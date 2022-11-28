import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVVersionMetalsSpotPerformanceAnnualPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSpotPerformanceAnnualQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=years" })
  years?: number;
}


export class GetApiVVersionMetalsSpotPerformanceAnnualRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiVVersionMetalsSpotPerformanceAnnualPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiVVersionMetalsSpotPerformanceAnnualQueryParams;
}


export class GetApiVVersionMetalsSpotPerformanceAnnualResponse extends SpeakeasyBase {
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
