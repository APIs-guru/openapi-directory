import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMyTimeCardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timeCard_id" })
  timeCardId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetMyTimeCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyTimeCardPathParams;
}


export class GetMyTimeCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timeCardDetailVo?: any;
}
