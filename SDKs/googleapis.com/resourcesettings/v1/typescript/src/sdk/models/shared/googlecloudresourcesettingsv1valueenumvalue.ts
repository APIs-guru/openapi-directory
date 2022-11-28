import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudResourcesettingsV1ValueEnumValue
/** 
 * A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions.
**/
export class GoogleCloudResourcesettingsV1ValueEnumValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
