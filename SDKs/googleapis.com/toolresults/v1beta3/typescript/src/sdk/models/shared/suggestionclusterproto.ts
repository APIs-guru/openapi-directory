import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestionProto } from "./suggestionproto";

export enum SuggestionClusterProtoCategoryEnum {
    UnknownCategory = "unknownCategory"
,    ContentLabeling = "contentLabeling"
,    TouchTargetSize = "touchTargetSize"
,    LowContrast = "lowContrast"
,    Implementation = "implementation"
}


// SuggestionClusterProto
/** 
 * A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
**/
export class SuggestionClusterProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: SuggestionClusterProtoCategoryEnum;

  @Metadata({ data: "json, name=suggestions", elemType: shared.SuggestionProto })
  suggestions?: SuggestionProto[];
}
