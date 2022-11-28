import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AveragesV2GetV2AveragesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project_id" })
  projectId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spatial" })
  spatial: shared.SpatialEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=temporal" })
  temporal: shared.TemporalEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];
}


export class AveragesV2GetV2AveragesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AveragesV2GetV2AveragesGetQueryParams;
}


export class AveragesV2GetV2AveragesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqResult?: shared.OpenAqResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
