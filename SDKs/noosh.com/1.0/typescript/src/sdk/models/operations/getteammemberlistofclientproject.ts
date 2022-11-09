import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTeamMemberListOfClientProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTeamMemberListOfClientProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMemberListOfClientProjectPathParams;
}


export class GetTeamMemberListOfClientProjectResponse extends SpeakeasyBase {
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
