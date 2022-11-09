import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkgroupDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetWorkgroupDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkgroupDetailPathParams;
}


export class GetWorkgroupDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  workgroupExpandVo?: any;
}
