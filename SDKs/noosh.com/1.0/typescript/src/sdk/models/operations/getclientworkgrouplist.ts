import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetClientWorkgroupListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetClientWorkgroupListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClientWorkgroupListPathParams;
}


export class GetClientWorkgroupListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  clientWorkgroupListVo?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
