import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SasPortalDeviceAirInterfaceRadioTechnologyEnum {
    RadioTechnologyUnspecified = "RADIO_TECHNOLOGY_UNSPECIFIED",
    EUtra = "E_UTRA",
    CambiumNetworks = "CAMBIUM_NETWORKS",
    FourGBbwSaa1 = "FOUR_G_BBW_SAA_1",
    Nr = "NR",
    DoodleCbrs = "DOODLE_CBRS",
    Cw = "CW",
    Redline = "REDLINE",
    TaranaWireless = "TARANA_WIRELESS"
}
/**
 * Information about the device's air interface.
**/
export declare class SasPortalDeviceAirInterface extends SpeakeasyBase {
    radioTechnology?: SasPortalDeviceAirInterfaceRadioTechnologyEnum;
    supportedSpec?: string;
}
