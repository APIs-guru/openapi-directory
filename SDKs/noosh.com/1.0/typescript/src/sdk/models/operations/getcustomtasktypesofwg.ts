import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCustomTaskTypesOfWgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetCustomTaskTypesOfWgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomTaskTypesOfWgPathParams;
}


export class GetCustomTaskTypesOfWgResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskTypeListVo?: any;
}
