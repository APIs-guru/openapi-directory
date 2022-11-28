import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SasPortalDeviceAirInterfaceRadioTechnologyEnum {
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


// SasPortalDeviceAirInterface
/** 
 * Information about the device's air interface.
**/
export class SasPortalDeviceAirInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=radioTechnology" })
  radioTechnology?: SasPortalDeviceAirInterfaceRadioTechnologyEnum;

  @SpeakeasyMetadata({ data: "json, name=supportedSpec" })
  supportedSpec?: string;
}
