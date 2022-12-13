import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationDocumentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class GetApplicationDocumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetApplicationDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationDocumentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApplicationDocumentsQueryParams;
}


export class GetApplicationDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedApplicationDocumentResult?: shared.PaginatedApplicationDocumentResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
