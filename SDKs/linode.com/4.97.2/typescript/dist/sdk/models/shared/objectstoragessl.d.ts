import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
 *
**/
export declare class ObjectStorageSsl extends SpeakeasyBase {
    certificate: string;
    privateKey: string;
}
