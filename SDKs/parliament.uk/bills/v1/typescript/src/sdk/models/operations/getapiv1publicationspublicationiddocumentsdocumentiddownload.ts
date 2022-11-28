import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publicationId" })
  publicationId: number;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadPathParams;
}


export class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
