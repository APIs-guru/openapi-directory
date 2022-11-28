import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";



// InfoTypeConfig
/** 
 * Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.
**/
export class InfoTypeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluateList" })
  evaluateList?: FilterList;

  @SpeakeasyMetadata({ data: "json, name=ignoreList" })
  ignoreList?: FilterList;

  @SpeakeasyMetadata({ data: "json, name=strictMatching" })
  strictMatching?: boolean;
}
