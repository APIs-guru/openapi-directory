import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterList } from "./filterlist";
import { FilterList } from "./filterlist";


// InfoTypeConfig
/** 
 * Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.
**/
export class InfoTypeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluateList" })
  evaluateList?: FilterList;

  @Metadata({ data: "json, name=ignoreList" })
  ignoreList?: FilterList;

  @Metadata({ data: "json, name=strictMatching" })
  strictMatching?: boolean;
}
