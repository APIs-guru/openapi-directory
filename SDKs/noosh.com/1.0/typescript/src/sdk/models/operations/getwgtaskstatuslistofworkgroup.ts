import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWgTaskStatusListOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWgTaskStatusListOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWgTaskStatusListOfWorkgroupPathParams;
}


export class GetWgTaskStatusListOfWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  wgTaskStatusListVo?: any;
}
