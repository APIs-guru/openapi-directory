import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditApplicationDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditApplicationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditApplicationDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApplicationDocumentEditRequest;
}


export class EditApplicationDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDocumentResult?: shared.ApplicationDocumentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
