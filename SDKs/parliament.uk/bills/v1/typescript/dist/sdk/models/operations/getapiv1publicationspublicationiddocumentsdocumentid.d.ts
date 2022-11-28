import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams extends SpeakeasyBase {
    documentId: number;
    publicationId: number;
}
export declare class GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest extends SpeakeasyBase {
    pathParams: GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams;
}
export declare class GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    publicationDocument?: shared.PublicationDocument;
    statusCode: number;
}
