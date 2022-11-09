import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAmendmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=amendmentId" })
  amendmentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=billStageId" })
  billStageId: number;
}


export class GetAmendmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAmendmentPathParams;
}


export class GetAmendmentResponse extends SpeakeasyBase {
  @Metadata()
  amendmentDetail?: shared.AmendmentDetail;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
