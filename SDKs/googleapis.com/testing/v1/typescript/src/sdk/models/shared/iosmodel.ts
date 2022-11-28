import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IosModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED",
    Phone = "PHONE",
    Tablet = "TABLET",
    Wearable = "WEARABLE"
}


// IosModel
/** 
 * A description of an iOS device tests may be run on.
**/
export class IosModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceCapabilities" })
  deviceCapabilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: IosModelFormFactorEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=screenDensity" })
  screenDensity?: number;

  @SpeakeasyMetadata({ data: "json, name=screenX" })
  screenX?: number;

  @SpeakeasyMetadata({ data: "json, name=screenY" })
  screenY?: number;

  @SpeakeasyMetadata({ data: "json, name=supportedVersionIds" })
  supportedVersionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
