import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeasurementsGetV1V1MeasurementsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coordinates" })
  coordinates?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: shared.EntityTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_geo" })
  hasGeo?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_fields" })
  includeFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.MeasOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensorType" })
  sensorType?: shared.SensorTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=value_from" })
  valueFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=value_to" })
  valueTo?: number;
}


export class MeasurementsGetV1V1MeasurementsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MeasurementsGetV1V1MeasurementsGetQueryParams;
}


export class MeasurementsGetV1V1MeasurementsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  measurementsGetV1V1MeasurementsGet200ApplicationJsonAny?: any;
}
