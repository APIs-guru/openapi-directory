import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMemberRolesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetMemberRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMemberRolesPathParams;
}


export class GetMemberRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  roleListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
