import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SasPortalDeviceAirInterface } from "./sasportaldeviceairinterface";
import { SasPortalInstallationParams } from "./sasportalinstallationparams";
import { SasPortalDeviceModel } from "./sasportaldevicemodel";

export enum SasPortalDeviceConfigCategoryEnum {
    DeviceCategoryUnspecified = "DEVICE_CATEGORY_UNSPECIFIED"
,    DeviceCategoryA = "DEVICE_CATEGORY_A"
,    DeviceCategoryB = "DEVICE_CATEGORY_B"
}

export enum SasPortalDeviceConfigMeasurementCapabilitiesEnum {
    MeasurementCapabilityUnspecified = "MEASUREMENT_CAPABILITY_UNSPECIFIED"
,    MeasurementCapabilityReceivedPowerWithGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT"
,    MeasurementCapabilityReceivedPowerWithoutGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"
}

export enum SasPortalDeviceConfigStateEnum {
    DeviceConfigStateUnspecified = "DEVICE_CONFIG_STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Final = "FINAL"
}


// SasPortalDeviceConfig
/** 
 * Information about the device configuration.
**/
export class SasPortalDeviceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=airInterface" })
  airInterface?: SasPortalDeviceAirInterface;

  @Metadata({ data: "json, name=callSign" })
  callSign?: string;

  @Metadata({ data: "json, name=category" })
  category?: SasPortalDeviceConfigCategoryEnum;

  @Metadata({ data: "json, name=installationParams" })
  installationParams?: SasPortalInstallationParams;

  @Metadata({ data: "json, name=isSigned" })
  isSigned?: boolean;

  @Metadata({ data: "json, name=measurementCapabilities" })
  measurementCapabilities?: SasPortalDeviceConfigMeasurementCapabilitiesEnum[];

  @Metadata({ data: "json, name=model" })
  model?: SasPortalDeviceModel;

  @Metadata({ data: "json, name=state" })
  state?: SasPortalDeviceConfigStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
