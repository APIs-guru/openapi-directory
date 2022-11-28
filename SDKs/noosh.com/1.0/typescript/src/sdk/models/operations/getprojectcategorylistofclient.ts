import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectCategoryListOfClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_workgroup_id" })
  clientWorkgroupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectCategoryListOfClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectCategoryListOfClientPathParams;
}


export class GetProjectCategoryListOfClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  projectCategoryListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
