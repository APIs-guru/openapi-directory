import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBillPublicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetBillPublicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBillPublicationPathParams;
}


export class GetBillPublicationResponse extends SpeakeasyBase {
  @Metadata()
  billPublicationList?: shared.BillPublicationList;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
