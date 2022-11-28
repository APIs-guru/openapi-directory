import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DomainMappingSpecCertificateModeEnum {
    CertificateModeUnspecified = "CERTIFICATE_MODE_UNSPECIFIED",
    None = "NONE",
    Automatic = "AUTOMATIC"
}
/**
 * The desired state of the Domain Mapping.
**/
export declare class DomainMappingSpec extends SpeakeasyBase {
    certificateMode?: DomainMappingSpecCertificateModeEnum;
    forceOverride?: boolean;
    routeName?: string;
}
