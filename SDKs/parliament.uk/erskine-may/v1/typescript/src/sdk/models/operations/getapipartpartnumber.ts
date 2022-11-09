import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPartPartNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=partNumber" })
  partNumber: number;
}


export class GetApiPartPartNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiPartPartNumberPathParams;
}


export class GetApiPartPartNumberResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMayPart?: shared.ErskineMayPart;

  @Metadata()
  statusCode: number;
}
