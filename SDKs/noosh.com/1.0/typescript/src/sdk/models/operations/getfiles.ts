import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetFilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilesPathParams;
}


export class GetFilesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  fileResponseVo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
