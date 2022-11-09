import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=publicationId" })
  publicationId: number;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  publicationDocument?: shared.PublicationDocument;

  @Metadata()
  statusCode: number;
}
