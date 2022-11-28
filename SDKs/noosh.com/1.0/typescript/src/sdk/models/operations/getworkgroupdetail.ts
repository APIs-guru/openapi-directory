import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkgroupDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWorkgroupDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkgroupDetailPathParams;
}


export class GetWorkgroupDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workgroupExpandVo?: any;
}
