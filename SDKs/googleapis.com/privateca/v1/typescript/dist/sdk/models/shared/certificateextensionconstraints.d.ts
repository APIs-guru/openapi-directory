import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectId } from "./objectid";
export declare enum CertificateExtensionConstraintsKnownExtensionsEnum {
    KnownCertificateExtensionUnspecified = "KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED",
    BaseKeyUsage = "BASE_KEY_USAGE",
    ExtendedKeyUsage = "EXTENDED_KEY_USAGE",
    CaOptions = "CA_OPTIONS",
    PolicyIds = "POLICY_IDS",
    AiaOcspServers = "AIA_OCSP_SERVERS"
}
/**
 * Describes a set of X.509 extensions that may be part of some certificate issuance controls.
**/
export declare class CertificateExtensionConstraints extends SpeakeasyBase {
    additionalExtensions?: ObjectId[];
    knownExtensions?: CertificateExtensionConstraintsKnownExtensionsEnum[];
}
