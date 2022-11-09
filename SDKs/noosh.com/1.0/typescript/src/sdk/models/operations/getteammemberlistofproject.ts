import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTeamMemberListOfProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTeamMemberListOfProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMemberListOfProjectPathParams;
}


export class GetTeamMemberListOfProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMemberListVo?: any;
}
