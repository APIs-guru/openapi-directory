import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBillStageDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billStageId" })
  billStageId: number;
}


export class GetBillStageDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBillStageDetailsPathParams;
}


export class GetBillStageDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billStageDetails?: shared.BillStageDetails;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
