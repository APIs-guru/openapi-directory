import { SpeakeasyBase } from "../../../internal/utils";
import { IssuanceModes } from "./issuancemodes";
import { AllowedKeyType } from "./allowedkeytype";
import { X509Parameters } from "./x509parameters";
import { CertificateIdentityConstraints } from "./certificateidentityconstraints";
import { CertificateExtensionConstraints } from "./certificateextensionconstraints";
/**
 * Defines controls over all certificate issuance within a CaPool.
**/
export declare class IssuancePolicy extends SpeakeasyBase {
    allowedIssuanceModes?: IssuanceModes;
    allowedKeyTypes?: AllowedKeyType[];
    baselineValues?: X509Parameters;
    identityConstraints?: CertificateIdentityConstraints;
    maximumLifetime?: string;
    passthroughExtensions?: CertificateExtensionConstraints;
}
