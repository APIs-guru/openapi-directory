import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AndroidModelFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED",
    Virtual = "VIRTUAL",
    Physical = "PHYSICAL",
    Emulator = "EMULATOR"
}

export enum AndroidModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED",
    Phone = "PHONE",
    Tablet = "TABLET",
    Wearable = "WEARABLE"
}


// AndroidModel
/** 
 * A description of an Android device tests may be run on.
**/
export class AndroidModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=codename" })
  codename?: string;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: AndroidModelFormEnum;

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: AndroidModelFormFactorEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lowFpsVideoRecording" })
  lowFpsVideoRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=screenDensity" })
  screenDensity?: number;

  @SpeakeasyMetadata({ data: "json, name=screenX" })
  screenX?: number;

  @SpeakeasyMetadata({ data: "json, name=screenY" })
  screenY?: number;

  @SpeakeasyMetadata({ data: "json, name=supportedAbis" })
  supportedAbis?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportedVersionIds" })
  supportedVersionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
