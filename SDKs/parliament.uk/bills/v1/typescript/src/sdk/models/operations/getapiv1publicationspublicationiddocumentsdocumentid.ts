import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publicationId" })
  publicationId: number;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  publicationDocument?: shared.PublicationDocument;

  @SpeakeasyMetadata()
  statusCode: number;
}
