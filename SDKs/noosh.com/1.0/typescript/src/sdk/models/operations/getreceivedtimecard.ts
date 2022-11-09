import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReceivedTimeCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=timeCard_id" })
  timeCardId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetReceivedTimeCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReceivedTimeCardPathParams;
}


export class GetReceivedTimeCardResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  timeCardReceivedDetailVo?: any;
}
