import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetV1WorkgroupsWorkgroupIdQuotesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetV1WorkgroupsWorkgroupIdQuotesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quote_state_id, use filters={"quote_state_id":111111}" })
  quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
}


export class GetV1WorkgroupsWorkgroupIdQuotesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1WorkgroupsWorkgroupIdQuotesPathParams;

  @Metadata()
  queryParams: GetV1WorkgroupsWorkgroupIdQuotesQueryParams;
}


export class GetV1WorkgroupsWorkgroupIdQuotesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  quoteOfWgLevelSimpleVo?: any;

  @Metadata()
  statusCode: number;
}
