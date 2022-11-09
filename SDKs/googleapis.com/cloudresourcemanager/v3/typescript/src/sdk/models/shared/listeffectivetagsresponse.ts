import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EffectiveTag } from "./effectivetag";


// ListEffectiveTagsResponse
/** 
 * The response of ListEffectiveTags.
**/
export class ListEffectiveTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveTags", elemType: shared.EffectiveTag })
  effectiveTags?: EffectiveTag[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
