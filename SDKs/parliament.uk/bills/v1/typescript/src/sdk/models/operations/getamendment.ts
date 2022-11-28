import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAmendmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=amendmentId" })
  amendmentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billStageId" })
  billStageId: number;
}


export class GetAmendmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAmendmentPathParams;
}


export class GetAmendmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amendmentDetail?: shared.AmendmentDetail;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
