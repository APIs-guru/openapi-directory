import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PutDocumentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class PutDocumentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDocumentPathParams;

  @Metadata()
  headers: PutDocumentHeaders;
}


export class PutDocumentResponse extends SpeakeasyBase {
  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
