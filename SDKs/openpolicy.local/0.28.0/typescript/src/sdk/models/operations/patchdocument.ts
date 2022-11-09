import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PatchDocumentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchDocumentPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.PatchesSchema })
  request: shared.PatchesSchema[];
}


export class PatchDocumentResponse extends SpeakeasyBase {
  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
