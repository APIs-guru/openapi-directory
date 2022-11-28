import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DomainMappingSpecCertificateModeEnum {
    CertificateModeUnspecified = "CERTIFICATE_MODE_UNSPECIFIED",
    None = "NONE",
    Automatic = "AUTOMATIC"
}


// DomainMappingSpec
/** 
 * The desired state of the Domain Mapping.
**/
export class DomainMappingSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateMode" })
  certificateMode?: DomainMappingSpecCertificateModeEnum;

  @SpeakeasyMetadata({ data: "json, name=forceOverride" })
  forceOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=routeName" })
  routeName?: string;
}
