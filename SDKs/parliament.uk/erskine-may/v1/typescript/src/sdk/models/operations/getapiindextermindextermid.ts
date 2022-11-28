import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiIndexTermIndexTermIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=indexTermId" })
  indexTermId: number;
}


export class GetApiIndexTermIndexTermIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiIndexTermIndexTermIdPathParams;
}


export class GetApiIndexTermIndexTermIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMayIndexTerm?: shared.ErskineMayIndexTerm;

  @SpeakeasyMetadata()
  statusCode: number;
}
