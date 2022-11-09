import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInvoiceFilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetInvoiceFilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceFilesPathParams;
}


export class GetInvoiceFilesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  fileListResponseVo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
