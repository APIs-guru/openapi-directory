import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A SSL/TLS X509 certificate
**/
export declare class Certificate extends SpeakeasyBase {
    autoRenew: string;
    ca: string;
    caRef: string;
    chain: string;
    domain: string;
    from: string;
    id: string;
    privateKey: string;
    selfSigned: string;
    subject: string;
    to: string;
    valid: string;
}
