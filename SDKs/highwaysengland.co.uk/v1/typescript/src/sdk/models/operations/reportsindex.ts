import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportsIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_type" })
  reportType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class ReportsIndexQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reportSubTypeId" })
  reportSubTypeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sites" })
  sites: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class ReportsIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReportsIndexPathParams;

  @Metadata()
  queryParams: ReportsIndexQueryParams;
}


export class ReportsIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
