import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectStatusPathParams;
}


export class GetProjectStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  projectStatusListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
