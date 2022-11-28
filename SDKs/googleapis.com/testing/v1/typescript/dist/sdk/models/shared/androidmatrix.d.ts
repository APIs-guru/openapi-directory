import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
**/
export declare class AndroidMatrix extends SpeakeasyBase {
    androidModelIds?: string[];
    androidVersionIds?: string[];
    locales?: string[];
    orientations?: string[];
}
