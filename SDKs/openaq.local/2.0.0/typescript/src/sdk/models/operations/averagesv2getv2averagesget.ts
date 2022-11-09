import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AveragesV2GetV2AveragesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=project_id" })
  projectId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spatial" })
  spatial: shared.SpatialEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=temporal" })
  temporal: shared.TemporalEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];
}


export class AveragesV2GetV2AveragesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AveragesV2GetV2AveragesGetQueryParams;
}


export class AveragesV2GetV2AveragesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  openAqResult?: shared.OpenAqResult;

  @Metadata()
  statusCode: number;
}
