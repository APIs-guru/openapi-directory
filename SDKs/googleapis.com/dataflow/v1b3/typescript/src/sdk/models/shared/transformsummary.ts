import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisplayData } from "./displaydata";


export enum TransformSummaryKindEnum {
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


// TransformSummary
/** 
 * Description of the type, names/ids, and input/outputs for a transform.
**/
export class TransformSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayData", elemType: DisplayData })
  displayData?: DisplayData[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inputCollectionName" })
  inputCollectionName?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: TransformSummaryKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputCollectionName" })
  outputCollectionName?: string[];
}
