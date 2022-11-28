import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PatchDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PatchesSchema })
  request: shared.PatchesSchema[];
}


export class PatchDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
