import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SasPortalInstallationParamsHeightTypeEnum {
    HeightTypeUnspecified = "HEIGHT_TYPE_UNSPECIFIED",
    HeightTypeAgl = "HEIGHT_TYPE_AGL",
    HeightTypeAmsl = "HEIGHT_TYPE_AMSL"
}


// SasPortalInstallationParams
/** 
 * Information about the device installation parameters.
**/
export class SasPortalInstallationParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antennaAzimuth" })
  antennaAzimuth?: number;

  @SpeakeasyMetadata({ data: "json, name=antennaBeamwidth" })
  antennaBeamwidth?: number;

  @SpeakeasyMetadata({ data: "json, name=antennaDowntilt" })
  antennaDowntilt?: number;

  @SpeakeasyMetadata({ data: "json, name=antennaGain" })
  antennaGain?: number;

  @SpeakeasyMetadata({ data: "json, name=antennaModel" })
  antennaModel?: string;

  @SpeakeasyMetadata({ data: "json, name=cpeCbsdIndication" })
  cpeCbsdIndication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eirpCapability" })
  eirpCapability?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=heightType" })
  heightType?: SasPortalInstallationParamsHeightTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=horizontalAccuracy" })
  horizontalAccuracy?: number;

  @SpeakeasyMetadata({ data: "json, name=indoorDeployment" })
  indoorDeployment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=verticalAccuracy" })
  verticalAccuracy?: number;
}
