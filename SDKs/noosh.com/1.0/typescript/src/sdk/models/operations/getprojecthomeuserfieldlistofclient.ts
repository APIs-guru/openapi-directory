import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProjectHomeUserFieldListOfClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_workgroup_id" })
  clientWorkgroupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectHomeUserFieldListOfClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectHomeUserFieldListOfClientPathParams;
}


export class GetProjectHomeUserFieldListOfClientResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  projectHomeUserFieldsListVo?: any;

  @Metadata()
  statusCode: number;
}
