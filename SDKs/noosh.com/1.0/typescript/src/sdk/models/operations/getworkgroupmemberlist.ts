import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkgroupMemberListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWorkgroupMemberListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkgroupMemberListPathParams;
}


export class GetWorkgroupMemberListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workgroupMembersListVo?: any;
}
