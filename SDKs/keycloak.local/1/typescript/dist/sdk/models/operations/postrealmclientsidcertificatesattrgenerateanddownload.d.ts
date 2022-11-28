import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdCertificatesAttrGenerateAndDownloadPathParams extends SpeakeasyBase {
    attr: string;
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdCertificatesAttrGenerateAndDownloadPathParams;
    request: shared.KeyStoreConfig;
}
export declare class PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse extends SpeakeasyBase {
    contentType: string;
    postRealmClientsIdCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString?: string;
    statusCode: number;
}
