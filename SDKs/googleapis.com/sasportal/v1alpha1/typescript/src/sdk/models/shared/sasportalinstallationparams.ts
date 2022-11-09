import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SasPortalInstallationParamsHeightTypeEnum {
    HeightTypeUnspecified = "HEIGHT_TYPE_UNSPECIFIED"
,    HeightTypeAgl = "HEIGHT_TYPE_AGL"
,    HeightTypeAmsl = "HEIGHT_TYPE_AMSL"
}


// SasPortalInstallationParams
/** 
 * Information about the device installation parameters.
**/
export class SasPortalInstallationParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=antennaAzimuth" })
  antennaAzimuth?: number;

  @Metadata({ data: "json, name=antennaBeamwidth" })
  antennaBeamwidth?: number;

  @Metadata({ data: "json, name=antennaDowntilt" })
  antennaDowntilt?: number;

  @Metadata({ data: "json, name=antennaGain" })
  antennaGain?: number;

  @Metadata({ data: "json, name=antennaModel" })
  antennaModel?: string;

  @Metadata({ data: "json, name=cpeCbsdIndication" })
  cpeCbsdIndication?: boolean;

  @Metadata({ data: "json, name=eirpCapability" })
  eirpCapability?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=heightType" })
  heightType?: SasPortalInstallationParamsHeightTypeEnum;

  @Metadata({ data: "json, name=horizontalAccuracy" })
  horizontalAccuracy?: number;

  @Metadata({ data: "json, name=indoorDeployment" })
  indoorDeployment?: boolean;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=verticalAccuracy" })
  verticalAccuracy?: number;
}
