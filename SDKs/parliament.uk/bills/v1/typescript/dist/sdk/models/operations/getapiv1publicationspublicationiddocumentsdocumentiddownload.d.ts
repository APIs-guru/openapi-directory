import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadPathParams extends SpeakeasyBase {
    documentId: number;
    publicationId: number;
}
export declare class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRequest extends SpeakeasyBase {
    pathParams: GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadPathParams;
}
export declare class GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
