import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectStatusOfClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_workgroup_id" })
  clientWorkgroupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectStatusOfClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectStatusOfClientPathParams;
}


export class GetProjectStatusOfClientResponse extends SpeakeasyBase {
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
