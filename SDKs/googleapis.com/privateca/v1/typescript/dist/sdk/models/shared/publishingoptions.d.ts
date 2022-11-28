import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
**/
export declare class PublishingOptions extends SpeakeasyBase {
    publishCaCert?: boolean;
    publishCrl?: boolean;
}
