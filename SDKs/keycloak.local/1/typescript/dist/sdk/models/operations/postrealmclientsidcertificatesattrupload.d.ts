import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdCertificatesAttrUploadPathParams extends SpeakeasyBase {
    attr: string;
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdCertificatesAttrUploadRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdCertificatesAttrUploadPathParams;
}
export declare class PostRealmClientsIdCertificatesAttrUploadResponse extends SpeakeasyBase {
    certificateRepresentation?: shared.CertificateRepresentation;
    contentType: string;
    statusCode: number;
}
