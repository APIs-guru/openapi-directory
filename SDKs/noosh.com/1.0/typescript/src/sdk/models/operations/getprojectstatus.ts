import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProjectStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectStatusPathParams;
}


export class GetProjectStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  projectStatusListVo?: any;

  @Metadata()
  statusCode: number;
}
