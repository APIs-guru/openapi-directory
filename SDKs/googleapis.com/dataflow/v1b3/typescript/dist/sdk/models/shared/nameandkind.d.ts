import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NameAndKindKindEnum {
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
/**
 * Basic metadata about a counter.
**/
export declare class NameAndKind extends SpeakeasyBase {
    kind?: NameAndKindKindEnum;
    name?: string;
}
