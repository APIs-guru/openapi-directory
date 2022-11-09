import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBillStageDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=billStageId" })
  billStageId: number;
}


export class GetBillStageDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBillStageDetailsPathParams;
}


export class GetBillStageDetailsResponse extends SpeakeasyBase {
  @Metadata()
  billStageDetails?: shared.BillStageDetails;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
