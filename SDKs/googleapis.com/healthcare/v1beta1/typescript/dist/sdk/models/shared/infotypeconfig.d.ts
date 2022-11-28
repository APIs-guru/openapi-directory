import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.
**/
export declare class InfoTypeConfig extends SpeakeasyBase {
    evaluateList?: FilterList;
    ignoreList?: FilterList;
    strictMatching?: boolean;
}
