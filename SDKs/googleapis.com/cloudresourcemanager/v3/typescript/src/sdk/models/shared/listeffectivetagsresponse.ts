import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectiveTag } from "./effectivetag";



// ListEffectiveTagsResponse
/** 
 * The response of ListEffectiveTags.
**/
export class ListEffectiveTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTags", elemType: EffectiveTag })
  effectiveTags?: EffectiveTag[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
