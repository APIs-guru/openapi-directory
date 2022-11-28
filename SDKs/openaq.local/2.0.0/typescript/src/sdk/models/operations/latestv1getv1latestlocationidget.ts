import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LatestV1GetV1LatestLocationIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: number;
}


export class LatestV1GetV1LatestLocationIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coordinates" })
  coordinates?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dumpRaw" })
  dumpRaw?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: shared.EntityTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_geo" })
  hasGeo?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturerName" })
  manufacturerName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.LocationsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensorType" })
  sensorType?: shared.SensorTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceName" })
  sourceName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];
}


export class LatestV1GetV1LatestLocationIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LatestV1GetV1LatestLocationIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: LatestV1GetV1LatestLocationIdGetQueryParams;
}


export class LatestV1GetV1LatestLocationIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqResult?: shared.OpenAqResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
