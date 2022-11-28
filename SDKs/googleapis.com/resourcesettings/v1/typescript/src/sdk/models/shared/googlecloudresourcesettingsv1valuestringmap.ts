import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudResourcesettingsV1ValueStringMap
/** 
 * A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.
**/
export class GoogleCloudResourcesettingsV1ValueStringMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mappings" })
  mappings?: Map<string, string>;
}
