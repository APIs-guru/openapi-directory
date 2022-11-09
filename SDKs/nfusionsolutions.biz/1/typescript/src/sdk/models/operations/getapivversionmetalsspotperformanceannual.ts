import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsSpotPerformanceAnnualPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsSpotPerformanceAnnualQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=years" })
  years?: number;
}


export class GetApiVVersionMetalsSpotPerformanceAnnualRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsSpotPerformanceAnnualPathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsSpotPerformanceAnnualQueryParams;
}


export class GetApiVVersionMetalsSpotPerformanceAnnualResponse extends SpeakeasyBase {
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
