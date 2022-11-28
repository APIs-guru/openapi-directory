import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBillPublicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetBillPublicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBillPublicationPathParams;
}


export class GetBillPublicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billPublicationList?: shared.BillPublicationList;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
