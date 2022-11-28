import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkFirmwareUpgradesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;

  @SpeakeasyMetadata({ data: "json, name=participateInNextBetaRelease" })
  participateInNextBetaRelease?: boolean;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion
/** 
 * The version to be updated to
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade
/** 
 * The pending firmware upgrade if it exists
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=toVersion" })
  toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless
/** 
 * The network device to be updated
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextUpgrade" })
  nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
}


// UpdateNetworkFirmwareUpgradesRequestBodyProducts
/** 
 * Contains information about the network to update
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyProducts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliance" })
  appliance?: UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;

  @SpeakeasyMetadata({ data: "json, name=camera" })
  camera?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;

  @SpeakeasyMetadata({ data: "json, name=cellularGateway" })
  cellularGateway?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;

  @SpeakeasyMetadata({ data: "json, name=environmental" })
  environmental?: UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental;

  @SpeakeasyMetadata({ data: "json, name=sensor" })
  sensor?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;

  @SpeakeasyMetadata({ data: "json, name=switch" })
  switch?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;

  @SpeakeasyMetadata({ data: "json, name=vmxHost" })
  vmxHost?: UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost;

  @SpeakeasyMetadata({ data: "json, name=wireless" })
  wireless?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
}

export enum UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum {
    Sun = "sun",
    Mon = "mon",
    Tue = "tue",
    Wed = "wed",
    Thu = "thu",
    Fri = "fri",
    Sat = "sat",
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday"
}

export enum UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum {
    Zero00 = "0:00",
    One00 = "1:00",
    Two00 = "2:00",
    Three00 = "3:00",
    Four00 = "4:00",
    Five00 = "5:00",
    Six00 = "6:00",
    Seven00 = "7:00",
    Eight00 = "8:00",
    Nine00 = "9:00",
    Ten00 = "10:00",
    Eleven00 = "11:00",
    Twelve00 = "12:00",
    Thirteen00 = "13:00",
    Fourteen00 = "14:00",
    Fifteen00 = "15:00",
    Sixteen00 = "16:00",
    Seventeen00 = "17:00",
    Eighteen00 = "18:00",
    Nineteen00 = "19:00",
    Twenty00 = "20:00",
    TwentyOne00 = "21:00",
    TwentyTwo00 = "22:00",
    TwentyThree00 = "23:00"
}


// UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow
/** 
 * Upgrade window for devices in network
**/
export class UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=hourOfDay" })
  hourOfDay?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;
}


export class UpdateNetworkFirmwareUpgradesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: UpdateNetworkFirmwareUpgradesRequestBodyProducts;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeWindow" })
  upgradeWindow?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
}


export class UpdateNetworkFirmwareUpgradesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkFirmwareUpgradesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkFirmwareUpgradesRequestBody;
}


export class UpdateNetworkFirmwareUpgradesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkFirmwareUpgrades200ApplicationJsonObject?: Map<string, any>;
}
