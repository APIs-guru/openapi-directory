import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";
import { SubjectConfig } from "./subjectconfig";
/**
 * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
**/
export declare class CertificateConfig extends SpeakeasyBase {
    publicKey?: PublicKey;
    reusableConfig?: ReusableConfigWrapper;
    subjectConfig?: SubjectConfig;
}
