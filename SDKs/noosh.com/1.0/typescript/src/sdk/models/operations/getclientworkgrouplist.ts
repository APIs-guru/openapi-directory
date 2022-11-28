import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetClientWorkgroupListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetClientWorkgroupListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClientWorkgroupListPathParams;
}


export class GetClientWorkgroupListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  clientWorkgroupListVo?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
