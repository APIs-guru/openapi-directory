import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProjectCategoryListOfClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_workgroup_id" })
  clientWorkgroupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectCategoryListOfClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectCategoryListOfClientPathParams;
}


export class GetProjectCategoryListOfClientResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  projectCategoryListVo?: any;

  @Metadata()
  statusCode: number;
}
