import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NameAndKindKindEnum {
    Invalid = "INVALID"
,    Sum = "SUM"
,    Max = "MAX"
,    Min = "MIN"
,    Mean = "MEAN"
,    Or = "OR"
,    And = "AND"
,    Set = "SET"
,    Distribution = "DISTRIBUTION"
,    LatestValue = "LATEST_VALUE"
}


// NameAndKind
/** 
 * Basic metadata about a counter.
**/
export class NameAndKind extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: NameAndKindKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
