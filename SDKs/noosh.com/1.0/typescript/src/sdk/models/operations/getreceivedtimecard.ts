import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReceivedTimeCardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timeCard_id" })
  timeCardId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetReceivedTimeCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReceivedTimeCardPathParams;
}


export class GetReceivedTimeCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timeCardReceivedDetailVo?: any;
}
