import { SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";
/**
 * SslCerts list response.
**/
export declare class SslCertsListResponse extends SpeakeasyBase {
    items?: SslCert[];
    kind?: string;
}
