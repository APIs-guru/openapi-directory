import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AndroidModelFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED"
,    Virtual = "VIRTUAL"
,    Physical = "PHYSICAL"
,    Emulator = "EMULATOR"
}

export enum AndroidModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED"
,    Phone = "PHONE"
,    Tablet = "TABLET"
,    Wearable = "WEARABLE"
}


// AndroidModel
/** 
 * A description of an Android device tests may be run on.
**/
export class AndroidModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=codename" })
  codename?: string;

  @Metadata({ data: "json, name=form" })
  form?: AndroidModelFormEnum;

  @Metadata({ data: "json, name=formFactor" })
  formFactor?: AndroidModelFormFactorEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lowFpsVideoRecording" })
  lowFpsVideoRecording?: boolean;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=screenDensity" })
  screenDensity?: number;

  @Metadata({ data: "json, name=screenX" })
  screenX?: number;

  @Metadata({ data: "json, name=screenY" })
  screenY?: number;

  @Metadata({ data: "json, name=supportedAbis" })
  supportedAbis?: string[];

  @Metadata({ data: "json, name=supportedVersionIds" })
  supportedVersionIds?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
