import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SasPortalInstallationParamsHeightTypeEnum {
    HeightTypeUnspecified = "HEIGHT_TYPE_UNSPECIFIED",
    HeightTypeAgl = "HEIGHT_TYPE_AGL",
    HeightTypeAmsl = "HEIGHT_TYPE_AMSL"
}
/**
 * Information about the device installation parameters.
**/
export declare class SasPortalInstallationParams extends SpeakeasyBase {
    antennaAzimuth?: number;
    antennaBeamwidth?: number;
    antennaDowntilt?: number;
    antennaGain?: number;
    antennaModel?: string;
    cpeCbsdIndication?: boolean;
    eirpCapability?: number;
    height?: number;
    heightType?: SasPortalInstallationParamsHeightTypeEnum;
    horizontalAccuracy?: number;
    indoorDeployment?: boolean;
    latitude?: number;
    longitude?: number;
    verticalAccuracy?: number;
}
