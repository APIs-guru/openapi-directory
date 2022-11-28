import { SpeakeasyBase } from "../../../internal/utils";
import { KeyId } from "./keyid";
import { CertificateFingerprint } from "./certificatefingerprint";
import { ReusableConfigValues } from "./reusableconfigvalues";
import { PublicKey } from "./publickey";
import { SubjectDescription } from "./subjectdescription";
/**
 * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
**/
export declare class CertificateDescription extends SpeakeasyBase {
    aiaIssuingCertificateUrls?: string[];
    authorityKeyId?: KeyId;
    certFingerprint?: CertificateFingerprint;
    configValues?: ReusableConfigValues;
    crlDistributionPoints?: string[];
    publicKey?: PublicKey;
    subjectDescription?: SubjectDescription;
    subjectKeyId?: KeyId;
}
