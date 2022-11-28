import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBuyOrderListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuyOrderListPathParams;
}


export class GetBuyOrderListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  orderListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
