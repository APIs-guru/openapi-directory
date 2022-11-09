import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Release
/** 
 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
**/
export class Release extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rulesetName" })
  rulesetName?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
