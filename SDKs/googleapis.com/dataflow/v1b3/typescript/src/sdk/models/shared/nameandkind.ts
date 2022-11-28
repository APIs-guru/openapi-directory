import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NameAndKindKindEnum {
    Invalid = "INVALID",
    Sum = "SUM",
    Max = "MAX",
    Min = "MIN",
    Mean = "MEAN",
    Or = "OR",
    And = "AND",
    Set = "SET",
    Distribution = "DISTRIBUTION",
    LatestValue = "LATEST_VALUE"
}


// NameAndKind
/** 
 * Basic metadata about a counter.
**/
export class NameAndKind extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: NameAndKindKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
