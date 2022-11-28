import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdCertificatesAttrDownloadPathParams extends SpeakeasyBase {
    attr: string;
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdCertificatesAttrDownloadRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdCertificatesAttrDownloadPathParams;
    request: shared.KeyStoreConfig;
}
export declare class PostRealmClientsIdCertificatesAttrDownloadResponse extends SpeakeasyBase {
    contentType: string;
    postRealmClientsIdCertificatesAttrDownload2XxApplicationOctetStreamByteString?: string;
    statusCode: number;
}
