import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBuyOrderListOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderListOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuyOrderListOfWorkgroupPathParams;
}


export class GetBuyOrderListOfWorkgroupResponse extends SpeakeasyBase {
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
