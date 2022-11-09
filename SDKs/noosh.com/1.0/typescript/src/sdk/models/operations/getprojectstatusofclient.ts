import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProjectStatusOfClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_workgroup_id" })
  clientWorkgroupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectStatusOfClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectStatusOfClientPathParams;
}


export class GetProjectStatusOfClientResponse extends SpeakeasyBase {
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
