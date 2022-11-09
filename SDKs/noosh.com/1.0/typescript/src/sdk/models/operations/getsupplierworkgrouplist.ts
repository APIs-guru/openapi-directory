import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSupplierWorkgroupListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSupplierWorkgroupListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSupplierWorkgroupListPathParams;
}


export class GetSupplierWorkgroupListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  supplierWorkgroupListVo?: any;
}
