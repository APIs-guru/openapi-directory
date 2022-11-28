import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWgTaskStatusListOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWgTaskStatusListOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWgTaskStatusListOfWorkgroupPathParams;
}


export class GetWgTaskStatusListOfWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wgTaskStatusListVo?: any;
}
