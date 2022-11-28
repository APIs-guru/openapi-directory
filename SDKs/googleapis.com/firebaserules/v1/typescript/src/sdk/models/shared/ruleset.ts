import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Source } from "./source";



// Ruleset
/** 
 * `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
**/
export class Ruleset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}


// RulesetInput
/** 
 * `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
**/
export class RulesetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
