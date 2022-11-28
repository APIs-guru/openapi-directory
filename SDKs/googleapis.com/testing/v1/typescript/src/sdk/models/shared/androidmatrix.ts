import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AndroidMatrix
/** 
 * A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
**/
export class AndroidMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidModelIds" })
  androidModelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=androidVersionIds" })
  androidVersionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=locales" })
  locales?: string[];

  @SpeakeasyMetadata({ data: "json, name=orientations" })
  orientations?: string[];
}
