import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPlanIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=planId" })
  planId: string;
}


export class GetPlanIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetPlanIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlanIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlanIdQueryParams;
}


export class GetPlanIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
