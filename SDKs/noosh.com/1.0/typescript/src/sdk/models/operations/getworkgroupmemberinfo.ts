import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkgroupMemberInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWorkgroupMemberInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkgroupMemberInfoPathParams;
}


export class GetWorkgroupMemberInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  userDetailsExpandVo?: any;
}
