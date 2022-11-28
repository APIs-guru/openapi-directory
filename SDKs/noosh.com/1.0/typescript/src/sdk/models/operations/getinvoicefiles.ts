import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInvoiceFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetInvoiceFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceFilesPathParams;
}


export class GetInvoiceFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileListResponseVo?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
