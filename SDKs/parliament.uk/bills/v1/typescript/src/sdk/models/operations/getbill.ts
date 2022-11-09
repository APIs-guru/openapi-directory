import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBillPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetBillRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBillPathParams;
}


export class GetBillResponse extends SpeakeasyBase {
  @Metadata()
  bill?: shared.Bill;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
