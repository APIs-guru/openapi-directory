import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecificClientWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_workgroup_id" })
  clientWorkgroupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecificClientWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecificClientWorkgroupPathParams;
}


export class GetSpecificClientWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  clientWorkgroupExpandVo?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
