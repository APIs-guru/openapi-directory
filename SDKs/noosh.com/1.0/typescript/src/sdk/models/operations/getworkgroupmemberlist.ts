import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkgroupMemberListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWorkgroupMemberListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkgroupMemberListPathParams;
}


export class GetWorkgroupMemberListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  workgroupMembersListVo?: any;
}
