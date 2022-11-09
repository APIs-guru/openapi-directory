import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTeamMemberOfProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teammember_id" })
  teammemberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class DeleteTeamMemberOfProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTeamMemberOfProjectPathParams;
}


export class DeleteTeamMemberOfProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMemberBaseInfVo?: any;
}
