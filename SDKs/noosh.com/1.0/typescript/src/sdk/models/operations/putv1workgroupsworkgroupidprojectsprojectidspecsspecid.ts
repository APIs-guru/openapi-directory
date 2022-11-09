import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec_id" })
  specId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  specUpdatePersistVo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  specUpdatePersistVo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams;

  @Metadata()
  request?: PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests;
}


export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  specHttpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
