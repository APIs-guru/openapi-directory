import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPartPartNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partNumber" })
  partNumber: number;
}


export class GetApiPartPartNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiPartPartNumberPathParams;
}


export class GetApiPartPartNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMayPart?: shared.ErskineMayPart;

  @SpeakeasyMetadata()
  statusCode: number;
}
