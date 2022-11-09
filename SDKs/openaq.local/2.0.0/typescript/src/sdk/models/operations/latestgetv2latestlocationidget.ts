import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LatestGetV2LatestLocationIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: number;
}


export class LatestGetV2LatestLocationIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=coordinates" })
  coordinates?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dumpRaw" })
  dumpRaw?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: shared.EntityTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_geo" })
  hasGeo?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturerName" })
  manufacturerName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.LocationsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sensorType" })
  sensorType?: shared.SensorTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceName" })
  sourceName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];
}


export class LatestGetV2LatestLocationIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LatestGetV2LatestLocationIdGetPathParams;

  @Metadata()
  queryParams: LatestGetV2LatestLocationIdGetQueryParams;
}


export class LatestGetV2LatestLocationIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  openAqResult?: shared.OpenAqResult;

  @Metadata()
  statusCode: number;
}
