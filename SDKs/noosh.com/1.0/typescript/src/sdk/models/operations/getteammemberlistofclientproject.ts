import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTeamMemberListOfClientProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTeamMemberListOfClientProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMemberListOfClientProjectPathParams;
}


export class GetTeamMemberListOfClientProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamMemberListVo?: any;
}
