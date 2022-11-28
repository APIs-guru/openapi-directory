import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkgroupMemberInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWorkgroupMemberInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkgroupMemberInfoPathParams;
}


export class GetWorkgroupMemberInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userDetailsExpandVo?: any;
}
