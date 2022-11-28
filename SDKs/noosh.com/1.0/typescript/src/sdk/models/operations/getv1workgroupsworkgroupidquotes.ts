import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetV1WorkgroupsWorkgroupIdQuotesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetV1WorkgroupsWorkgroupIdQuotesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_state_id, use filters={\"quote_state_id\":111111}" })
  quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
}


export class GetV1WorkgroupsWorkgroupIdQuotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1WorkgroupsWorkgroupIdQuotesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1WorkgroupsWorkgroupIdQuotesQueryParams;
}


export class GetV1WorkgroupsWorkgroupIdQuotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  quoteOfWgLevelSimpleVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
