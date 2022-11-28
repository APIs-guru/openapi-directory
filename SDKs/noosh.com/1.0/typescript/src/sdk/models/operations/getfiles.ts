import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilesPathParams;
}


export class GetFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileResponseVo?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
