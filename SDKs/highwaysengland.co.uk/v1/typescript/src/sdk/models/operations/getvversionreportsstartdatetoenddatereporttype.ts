import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVVersionReportsStartDateToEndDateReportTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_type" })
  reportType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetVVersionReportsStartDateToEndDateReportTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportSubTypeId" })
  reportSubTypeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sites" })
  sites: string;
}


export class GetVVersionReportsStartDateToEndDateReportTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVVersionReportsStartDateToEndDateReportTypePathParams;

  @SpeakeasyMetadata()
  queryParams: GetVVersionReportsStartDateToEndDateReportTypeQueryParams;
}


export class GetVVersionReportsStartDateToEndDateReportTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
