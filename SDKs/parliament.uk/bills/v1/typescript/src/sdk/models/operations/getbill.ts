import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBillPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetBillRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBillPathParams;
}


export class GetBillResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bill?: shared.Bill;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
