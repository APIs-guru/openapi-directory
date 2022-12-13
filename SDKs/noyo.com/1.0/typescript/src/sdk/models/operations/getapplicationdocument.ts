import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class GetApplicationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationDocumentPathParams;
}


export class GetApplicationDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDocumentResult?: shared.ApplicationDocumentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
