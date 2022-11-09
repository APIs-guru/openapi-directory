import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IosModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED"
,    Phone = "PHONE"
,    Tablet = "TABLET"
,    Wearable = "WEARABLE"
}


// IosModel
/** 
 * A description of an iOS device tests may be run on.
**/
export class IosModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceCapabilities" })
  deviceCapabilities?: string[];

  @Metadata({ data: "json, name=formFactor" })
  formFactor?: IosModelFormFactorEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=screenDensity" })
  screenDensity?: number;

  @Metadata({ data: "json, name=screenX" })
  screenX?: number;

  @Metadata({ data: "json, name=screenY" })
  screenY?: number;

  @Metadata({ data: "json, name=supportedVersionIds" })
  supportedVersionIds?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
