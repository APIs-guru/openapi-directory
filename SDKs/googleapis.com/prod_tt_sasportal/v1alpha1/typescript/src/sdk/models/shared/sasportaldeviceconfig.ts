import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeviceAirInterface } from "./sasportaldeviceairinterface";
import { SasPortalInstallationParams } from "./sasportalinstallationparams";
import { SasPortalDeviceModel } from "./sasportaldevicemodel";


export enum SasPortalDeviceConfigCategoryEnum {
    DeviceCategoryUnspecified = "DEVICE_CATEGORY_UNSPECIFIED",
    DeviceCategoryA = "DEVICE_CATEGORY_A",
    DeviceCategoryB = "DEVICE_CATEGORY_B"
}

export enum SasPortalDeviceConfigMeasurementCapabilitiesEnum {
    MeasurementCapabilityUnspecified = "MEASUREMENT_CAPABILITY_UNSPECIFIED",
    MeasurementCapabilityReceivedPowerWithGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT",
    MeasurementCapabilityReceivedPowerWithoutGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"
}

export enum SasPortalDeviceConfigStateEnum {
    DeviceConfigStateUnspecified = "DEVICE_CONFIG_STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Final = "FINAL"
}


// SasPortalDeviceConfig
/** 
 * Information about the device configuration.
**/
export class SasPortalDeviceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airInterface" })
  airInterface?: SasPortalDeviceAirInterface;

  @SpeakeasyMetadata({ data: "json, name=callSign" })
  callSign?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SasPortalDeviceConfigCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=installationParams" })
  installationParams?: SasPortalInstallationParams;

  @SpeakeasyMetadata({ data: "json, name=isSigned" })
  isSigned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=measurementCapabilities" })
  measurementCapabilities?: SasPortalDeviceConfigMeasurementCapabilitiesEnum[];

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: SasPortalDeviceModel;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SasPortalDeviceConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
