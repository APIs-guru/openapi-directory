import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=publicationId" })
  publicationId: number;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadPathParams;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
