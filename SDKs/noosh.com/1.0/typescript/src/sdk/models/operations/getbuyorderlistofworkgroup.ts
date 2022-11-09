import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBuyOrderListOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderListOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuyOrderListOfWorkgroupPathParams;
}


export class GetBuyOrderListOfWorkgroupResponse extends SpeakeasyBase {
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
