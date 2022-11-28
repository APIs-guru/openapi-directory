import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTeamMemberOfProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teammember_id" })
  teammemberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class DeleteTeamMemberOfProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTeamMemberOfProjectPathParams;
}


export class DeleteTeamMemberOfProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamMemberBaseInfVo?: any;
}
