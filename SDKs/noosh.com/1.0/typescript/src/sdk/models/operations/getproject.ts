import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectPathParams;
}


export class GetProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  projectExpandVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
