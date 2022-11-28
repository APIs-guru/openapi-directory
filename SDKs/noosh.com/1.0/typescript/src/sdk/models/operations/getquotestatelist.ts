import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQuoteStateListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetQuoteStateListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQuoteStateListPathParams;
}


export class GetQuoteStateListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  objectStateListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
