import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSpecificClientWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_workgroup_id" })
  clientWorkgroupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecificClientWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecificClientWorkgroupPathParams;
}


export class GetSpecificClientWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  clientWorkgroupExpandVo?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
