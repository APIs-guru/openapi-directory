import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudResourcesettingsV1ValueStringSet
/** 
 * A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set.
**/
export class GoogleCloudResourcesettingsV1ValueStringSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}
