import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBuyOrderOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuyOrderOfWorkgroupPathParams;
}


export class GetBuyOrderOfWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  orderExpandWorkgroupLevelVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
