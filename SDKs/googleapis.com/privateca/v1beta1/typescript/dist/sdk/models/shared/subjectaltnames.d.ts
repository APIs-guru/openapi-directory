import { SpeakeasyBase } from "../../../internal/utils";
import { X509Extension } from "./x509extension";
/**
 * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
**/
export declare class SubjectAltNames extends SpeakeasyBase {
    customSans?: X509Extension[];
    dnsNames?: string[];
    emailAddresses?: string[];
    ipAddresses?: string[];
    uris?: string[];
}
