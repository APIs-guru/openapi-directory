import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTeamMemberOfProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostTeamMemberOfProjectRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  teamMemberPo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  teamMemberPo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostTeamMemberOfProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamMemberOfProjectPathParams;

  @Metadata()
  request?: PostTeamMemberOfProjectRequests;
}


export class PostTeamMemberOfProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1x1InvitedTeamMemberResultsVo?: any;
}
