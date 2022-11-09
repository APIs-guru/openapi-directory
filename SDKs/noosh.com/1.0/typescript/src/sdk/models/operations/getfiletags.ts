import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFileTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetFileTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFileTagsPathParams;
}


export class GetFileTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  fileTagResponseVo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
