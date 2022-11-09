import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBuyOrderOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuyOrderOfWorkgroupPathParams;
}


export class GetBuyOrderOfWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  orderExpandWorkgroupLevelVo?: any;

  @Metadata()
  statusCode: number;
}
