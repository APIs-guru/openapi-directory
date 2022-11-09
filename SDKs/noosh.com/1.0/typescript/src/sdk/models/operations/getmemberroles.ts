import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMemberRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetMemberRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMemberRolesPathParams;
}


export class GetMemberRolesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  roleListVo?: any;

  @Metadata()
  statusCode: number;
}
