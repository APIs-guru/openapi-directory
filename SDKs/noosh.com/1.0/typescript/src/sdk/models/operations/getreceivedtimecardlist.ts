import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReceivedTimeCardListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetReceivedTimeCardListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReceivedTimeCardListPathParams;
}


export class GetReceivedTimeCardListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timeCardListVo?: any;
}
