import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSellOrderOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSellOrderOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSellOrderOfWorkgroupPathParams;
}


export class GetSellOrderOfWorkgroupResponse extends SpeakeasyBase {
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
