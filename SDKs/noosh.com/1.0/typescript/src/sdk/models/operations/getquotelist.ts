import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQuoteListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetQuoteListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quote_state_id, use filters={"quote_state_id":111111}" })
  quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
}


export class GetQuoteListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQuoteListPathParams;

  @Metadata()
  queryParams: GetQuoteListQueryParams;
}


export class GetQuoteListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  quoteListVo?: any;

  @Metadata()
  statusCode: number;
}
