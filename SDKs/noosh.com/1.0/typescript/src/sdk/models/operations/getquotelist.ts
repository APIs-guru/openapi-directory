import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQuoteListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetQuoteListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_state_id, use filters={\"quote_state_id\":111111}" })
  quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
}


export class GetQuoteListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQuoteListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQuoteListQueryParams;
}


export class GetQuoteListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  quoteListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
