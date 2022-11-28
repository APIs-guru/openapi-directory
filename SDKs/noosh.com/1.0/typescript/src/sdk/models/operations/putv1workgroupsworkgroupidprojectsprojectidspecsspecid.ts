import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_id" })
  specId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  specUpdatePersistVo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  specUpdatePersistVo1?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams;

  @SpeakeasyMetadata()
  request?: PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequests;
}


export class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  specHttpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
