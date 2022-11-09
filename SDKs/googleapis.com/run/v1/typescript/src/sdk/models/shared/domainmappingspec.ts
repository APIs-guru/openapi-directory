import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainMappingSpecCertificateModeEnum {
    CertificateModeUnspecified = "CERTIFICATE_MODE_UNSPECIFIED"
,    None = "NONE"
,    Automatic = "AUTOMATIC"
}


// DomainMappingSpec
/** 
 * The desired state of the Domain Mapping.
**/
export class DomainMappingSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateMode" })
  certificateMode?: DomainMappingSpecCertificateModeEnum;

  @Metadata({ data: "json, name=forceOverride" })
  forceOverride?: boolean;

  @Metadata({ data: "json, name=routeName" })
  routeName?: string;
}
