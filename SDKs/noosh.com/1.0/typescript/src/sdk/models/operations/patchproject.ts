import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PatchProjectRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  projectPatchPo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  projectPatchPo1?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PatchProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchProjectPathParams;

  @SpeakeasyMetadata()
  request?: PatchProjectRequests;
}


export class PatchProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
