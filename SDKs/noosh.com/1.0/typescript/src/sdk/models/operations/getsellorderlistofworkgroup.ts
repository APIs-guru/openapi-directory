import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSellOrderListOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSellOrderListOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSellOrderListOfWorkgroupPathParams;
}


export class GetSellOrderListOfWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  orderWorkgroupLevelListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
