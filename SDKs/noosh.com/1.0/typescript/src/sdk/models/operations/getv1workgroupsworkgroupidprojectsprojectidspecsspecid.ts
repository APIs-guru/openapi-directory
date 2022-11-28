import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_id" })
  specId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdPathParams;
}


export class GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  specListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
