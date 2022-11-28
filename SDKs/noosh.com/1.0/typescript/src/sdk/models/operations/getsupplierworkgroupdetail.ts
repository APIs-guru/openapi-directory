import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSupplierWorkgroupDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bu_supplier_workgroup_id" })
  buSupplierWorkgroupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSupplierWorkgroupDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSupplierWorkgroupDetailPathParams;
}


export class GetSupplierWorkgroupDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supplierWorkgroupExpandVo?: any;
}
