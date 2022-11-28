import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";



// Action
/** 
 * Specifies a selection of tags and an `Action` to apply to each one.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cleanImageTag" })
  cleanImageTag?: ImageConfig;

  @SpeakeasyMetadata({ data: "json, name=cleanTextTag" })
  cleanTextTag?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deleteTag" })
  deleteTag?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=keepTag" })
  keepTag?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=queries" })
  queries?: string[];

  @SpeakeasyMetadata({ data: "json, name=recurseTag" })
  recurseTag?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=regenUidTag" })
  regenUidTag?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=removeTag" })
  removeTag?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resetTag" })
  resetTag?: Map<string, any>;
}
