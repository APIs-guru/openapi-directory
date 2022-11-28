import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeviceAirInterface } from "./sasportaldeviceairinterface";
import { SasPortalInstallationParams } from "./sasportalinstallationparams";
import { SasPortalDeviceModel } from "./sasportaldevicemodel";
export declare enum SasPortalDeviceConfigCategoryEnum {
    DeviceCategoryUnspecified = "DEVICE_CATEGORY_UNSPECIFIED",
    DeviceCategoryA = "DEVICE_CATEGORY_A",
    DeviceCategoryB = "DEVICE_CATEGORY_B"
}
export declare enum SasPortalDeviceConfigMeasurementCapabilitiesEnum {
    MeasurementCapabilityUnspecified = "MEASUREMENT_CAPABILITY_UNSPECIFIED",
    MeasurementCapabilityReceivedPowerWithGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT",
    MeasurementCapabilityReceivedPowerWithoutGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"
}
export declare enum SasPortalDeviceConfigStateEnum {
    DeviceConfigStateUnspecified = "DEVICE_CONFIG_STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Final = "FINAL"
}
/**
 * Information about the device configuration.
**/
export declare class SasPortalDeviceConfig extends SpeakeasyBase {
    airInterface?: SasPortalDeviceAirInterface;
    callSign?: string;
    category?: SasPortalDeviceConfigCategoryEnum;
    installationParams?: SasPortalInstallationParams;
    isSigned?: boolean;
    measurementCapabilities?: SasPortalDeviceConfigMeasurementCapabilitiesEnum[];
    model?: SasPortalDeviceModel;
    state?: SasPortalDeviceConfigStateEnum;
    updateTime?: string;
    userId?: string;
}
