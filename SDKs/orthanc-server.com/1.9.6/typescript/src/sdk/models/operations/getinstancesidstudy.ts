import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdStudyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdStudyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetInstancesIdStudyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdStudyPathParams;

  @Metadata()
  queryParams: GetInstancesIdStudyQueryParams;
}


export class GetInstancesIdStudyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdStudy200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
