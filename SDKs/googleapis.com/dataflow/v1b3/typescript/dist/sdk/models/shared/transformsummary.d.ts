import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayData } from "./displaydata";
export declare enum TransformSummaryKindEnum {
    UnknownKind = "UNKNOWN_KIND",
    ParDoKind = "PAR_DO_KIND",
    GroupByKeyKind = "GROUP_BY_KEY_KIND",
    FlattenKind = "FLATTEN_KIND",
    ReadKind = "READ_KIND",
    WriteKind = "WRITE_KIND",
    ConstantKind = "CONSTANT_KIND",
    SingletonKind = "SINGLETON_KIND",
    ShuffleKind = "SHUFFLE_KIND"
}
/**
 * Description of the type, names/ids, and input/outputs for a transform.
**/
export declare class TransformSummary extends SpeakeasyBase {
    displayData?: DisplayData[];
    id?: string;
    inputCollectionName?: string[];
    kind?: TransformSummaryKindEnum;
    name?: string;
    outputCollectionName?: string[];
}
