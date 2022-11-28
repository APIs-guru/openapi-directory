import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Certificate used to configure LDAPS.
**/
export declare class Certificate extends SpeakeasyBase {
    expireTime?: string;
    issuingCertificate?: Certificate;
    subject?: string;
    subjectAlternativeName?: string[];
    thumbprint?: string;
}
