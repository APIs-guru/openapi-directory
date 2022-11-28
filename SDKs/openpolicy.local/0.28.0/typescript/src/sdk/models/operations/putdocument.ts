import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PutDocumentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class PutDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDocumentPathParams;

  @SpeakeasyMetadata()
  headers: PutDocumentHeaders;
}


export class PutDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
