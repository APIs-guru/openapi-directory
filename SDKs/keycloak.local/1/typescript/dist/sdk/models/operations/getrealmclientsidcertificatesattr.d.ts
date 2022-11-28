import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdCertificatesAttrPathParams extends SpeakeasyBase {
    attr: string;
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdCertificatesAttrRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdCertificatesAttrPathParams;
}
export declare class GetRealmClientsIdCertificatesAttrResponse extends SpeakeasyBase {
    certificateRepresentation?: shared.CertificateRepresentation;
    contentType: string;
    statusCode: number;
}
