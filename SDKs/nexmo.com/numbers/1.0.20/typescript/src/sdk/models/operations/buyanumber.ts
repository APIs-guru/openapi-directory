import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BuyANumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.NumberDetails;
}


export class BuyANumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  response?: shared.Response;

  @SpeakeasyMetadata()
  response420?: shared.Response420;

  @SpeakeasyMetadata()
  unauthorized?: shared.Unauthorized;
}
