import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInvoicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetInvoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoicesPathParams;
}


export class GetInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  invoiceDetailListExpandVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
