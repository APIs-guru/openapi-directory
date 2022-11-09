import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoicePathParams;
}


export class GetInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  invoiceExpandVo?: any;

  @Metadata()
  statusCode: number;
}
