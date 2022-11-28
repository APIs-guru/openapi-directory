import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdCertificatesAttrGeneratePathParams extends SpeakeasyBase {
    attr: string;
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdCertificatesAttrGenerateRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdCertificatesAttrGeneratePathParams;
}
export declare class PostRealmClientsIdCertificatesAttrGenerateResponse extends SpeakeasyBase {
    certificateRepresentation?: shared.CertificateRepresentation;
    contentType: string;
    statusCode: number;
}
