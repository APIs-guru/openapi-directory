import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomTaskTypesOfWgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetCustomTaskTypesOfWgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomTaskTypesOfWgPathParams;
}


export class GetCustomTaskTypesOfWgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskTypeListVo?: any;
}
