import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationMemberElectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class GetApplicationMemberElectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetApplicationMemberElectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationMemberElectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApplicationMemberElectionsQueryParams;
}


export class GetApplicationMemberElectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedMemberElectionResult?: shared.PaginatedMemberElectionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
