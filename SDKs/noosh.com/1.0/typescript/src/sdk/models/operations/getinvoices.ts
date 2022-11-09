import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInvoicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetInvoicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoicesPathParams;
}


export class GetInvoicesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  invoiceDetailListExpandVo?: any;

  @Metadata()
  statusCode: number;
}
