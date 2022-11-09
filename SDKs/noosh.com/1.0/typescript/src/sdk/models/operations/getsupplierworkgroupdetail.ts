import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSupplierWorkgroupDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bu_supplier_workgroup_id" })
  buSupplierWorkgroupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSupplierWorkgroupDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSupplierWorkgroupDetailPathParams;
}


export class GetSupplierWorkgroupDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  supplierWorkgroupExpandVo?: any;
}
