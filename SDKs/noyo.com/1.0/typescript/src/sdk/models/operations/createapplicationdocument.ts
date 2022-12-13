import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApplicationDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class CreateApplicationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApplicationDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApplicationDocumentCreateRequest;
}


export class CreateApplicationDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDocumentResult?: shared.ApplicationDocumentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
