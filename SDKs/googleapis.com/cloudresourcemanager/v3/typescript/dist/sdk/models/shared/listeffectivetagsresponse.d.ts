import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EffectiveTag } from "./effectivetag";
/**
 * The response of ListEffectiveTags.
**/
export declare class ListEffectiveTagsResponse extends SpeakeasyBase {
    effectiveTags?: EffectiveTag[];
    nextPageToken?: string;
}
