import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdStudyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdStudyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetSeriesIdStudyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdStudyPathParams;

  @Metadata()
  queryParams: GetSeriesIdStudyQueryParams;
}


export class GetSeriesIdStudyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdStudy200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
