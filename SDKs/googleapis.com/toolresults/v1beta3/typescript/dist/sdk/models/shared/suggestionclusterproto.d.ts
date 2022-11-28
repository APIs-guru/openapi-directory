import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestionProto } from "./suggestionproto";
export declare enum SuggestionClusterProtoCategoryEnum {
    UnknownCategory = "unknownCategory",
    ContentLabeling = "contentLabeling",
    TouchTargetSize = "touchTargetSize",
    LowContrast = "lowContrast",
    Implementation = "implementation"
}
/**
 * A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
**/
export declare class SuggestionClusterProto extends SpeakeasyBase {
    category?: SuggestionClusterProtoCategoryEnum;
    suggestions?: SuggestionProto[];
}
