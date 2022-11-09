import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  contactUserVo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  contactUserVo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersPathParams;

  @Metadata()
  request?: PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequests;
}


export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersResponse extends SpeakeasyBase {
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
