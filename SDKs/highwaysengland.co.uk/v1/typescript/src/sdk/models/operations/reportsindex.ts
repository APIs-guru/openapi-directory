import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportsIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_type" })
  reportType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class ReportsIndexQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportSubTypeId" })
  reportSubTypeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sites" })
  sites: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class ReportsIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportsIndexPathParams;

  @SpeakeasyMetadata()
  queryParams: ReportsIndexQueryParams;
}


export class ReportsIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
