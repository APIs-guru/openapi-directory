import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MeasurementsGetV2MeasurementsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=coordinates" })
  coordinates?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: shared.EntityTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_geo" })
  hasGeo?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_fields" })
  includeFields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.MeasOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sensorType" })
  sensorType?: shared.SensorTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=value_from" })
  valueFrom?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=value_to" })
  valueTo?: number;
}


export class MeasurementsGetV2MeasurementsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MeasurementsGetV2MeasurementsGetQueryParams;
}


export class MeasurementsGetV2MeasurementsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  measurementsGetV2MeasurementsGet200ApplicationJsonAny?: any;
}
