import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoicePathParams;
}


export class GetInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  invoiceExpandVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
