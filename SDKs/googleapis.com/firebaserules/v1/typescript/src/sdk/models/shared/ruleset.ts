import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Metadata } from "./metadata";
import { Source } from "./source";


// Ruleset
/** 
 * `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
**/
export class Ruleset extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
