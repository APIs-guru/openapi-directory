import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkFirmwareUpgradesPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
    participateInNextBetaRelease?: boolean;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade;
}
/**
 * The version to be updated to
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * The pending firmware upgrade if it exists
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade extends SpeakeasyBase {
    time?: string;
    toVersion?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
}
/**
 * The network device to be updated
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless extends SpeakeasyBase {
    nextUpgrade?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
}
/**
 * Contains information about the network to update
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyProducts extends SpeakeasyBase {
    appliance?: UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
    camera?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
    cellularGateway?: UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
    environmental?: UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmental;
    sensor?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
    switch?: UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
    vmxHost?: UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost;
    wireless?: UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
}
export declare enum UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum {
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
export declare enum UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum {
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
/**
 * Upgrade window for devices in network
**/
export declare class UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow extends SpeakeasyBase {
    dayOfWeek?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
    hourOfDay?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;
}
export declare class UpdateNetworkFirmwareUpgradesRequestBody extends SpeakeasyBase {
    products?: UpdateNetworkFirmwareUpgradesRequestBodyProducts;
    timezone?: string;
    upgradeWindow?: UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
}
export declare class UpdateNetworkFirmwareUpgradesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkFirmwareUpgradesPathParams;
    request?: UpdateNetworkFirmwareUpgradesRequestBody;
}
export declare class UpdateNetworkFirmwareUpgradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkFirmwareUpgrades200ApplicationJsonObject?: Map<string, any>;
}
