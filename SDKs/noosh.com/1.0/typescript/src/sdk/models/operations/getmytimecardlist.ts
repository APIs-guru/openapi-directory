import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMyTimeCardListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetMyTimeCardListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyTimeCardListPathParams;
}


export class GetMyTimeCardListResponse extends SpeakeasyBase {
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
