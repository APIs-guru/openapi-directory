import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVVersionReportsStartDateToEndDateReportTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=end_date" })
  endDate: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_type" })
  reportType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=start_date" })
  startDate: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetVVersionReportsStartDateToEndDateReportTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reportSubTypeId" })
  reportSubTypeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sites" })
  sites: string;
}


export class GetVVersionReportsStartDateToEndDateReportTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVVersionReportsStartDateToEndDateReportTypePathParams;

  @Metadata()
  queryParams: GetVVersionReportsStartDateToEndDateReportTypeQueryParams;
}


export class GetVVersionReportsStartDateToEndDateReportTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
