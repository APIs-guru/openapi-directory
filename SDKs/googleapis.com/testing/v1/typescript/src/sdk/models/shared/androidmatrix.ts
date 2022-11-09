import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AndroidMatrix
/** 
 * A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
**/
export class AndroidMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidModelIds" })
  androidModelIds?: string[];

  @Metadata({ data: "json, name=androidVersionIds" })
  androidVersionIds?: string[];

  @Metadata({ data: "json, name=locales" })
  locales?: string[];

  @Metadata({ data: "json, name=orientations" })
  orientations?: string[];
}
