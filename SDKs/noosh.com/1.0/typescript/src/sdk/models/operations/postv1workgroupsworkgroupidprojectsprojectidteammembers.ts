import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contactUserVo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  contactUserVo1?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersPathParams;

  @SpeakeasyMetadata()
  request?: PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequests;
}


export class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersResponse extends SpeakeasyBase {
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
