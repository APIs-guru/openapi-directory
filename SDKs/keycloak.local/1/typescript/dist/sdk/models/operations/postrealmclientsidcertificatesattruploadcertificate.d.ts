import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdCertificatesAttrUploadCertificatePathParams extends SpeakeasyBase {
    attr: string;
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdCertificatesAttrUploadCertificateRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdCertificatesAttrUploadCertificatePathParams;
}
export declare class PostRealmClientsIdCertificatesAttrUploadCertificateResponse extends SpeakeasyBase {
    certificateRepresentation?: shared.CertificateRepresentation;
    contentType: string;
    statusCode: number;
}
