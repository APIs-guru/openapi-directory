import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSupplierWorkgroupListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSupplierWorkgroupListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSupplierWorkgroupListPathParams;
}


export class GetSupplierWorkgroupListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supplierWorkgroupListVo?: any;
}
