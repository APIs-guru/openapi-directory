import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSellOrderListOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSellOrderListOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSellOrderListOfWorkgroupPathParams;
}


export class GetSellOrderListOfWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  orderWorkgroupLevelListVo?: any;

  @Metadata()
  statusCode: number;
}
