import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSellOrderListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSellOrderListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSellOrderListPathParams;
}


export class GetSellOrderListResponse extends SpeakeasyBase {
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
