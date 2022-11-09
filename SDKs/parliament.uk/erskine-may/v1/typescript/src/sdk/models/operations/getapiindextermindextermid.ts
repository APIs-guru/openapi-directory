import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiIndexTermIndexTermIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=indexTermId" })
  indexTermId: number;
}


export class GetApiIndexTermIndexTermIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiIndexTermIndexTermIdPathParams;
}


export class GetApiIndexTermIndexTermIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMayIndexTerm?: shared.ErskineMayIndexTerm;

  @Metadata()
  statusCode: number;
}
