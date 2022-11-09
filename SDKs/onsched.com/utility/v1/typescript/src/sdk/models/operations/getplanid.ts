import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPlanIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=planId" })
  planId: string;
}


export class GetPlanIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetPlanIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlanIdPathParams;

  @Metadata()
  queryParams: GetPlanIdQueryParams;
}


export class GetPlanIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
