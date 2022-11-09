import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisplayData } from "./displaydata";

export enum TransformSummaryKindEnum {
    UnknownKind = "UNKNOWN_KIND"
,    ParDoKind = "PAR_DO_KIND"
,    GroupByKeyKind = "GROUP_BY_KEY_KIND"
,    FlattenKind = "FLATTEN_KIND"
,    ReadKind = "READ_KIND"
,    WriteKind = "WRITE_KIND"
,    ConstantKind = "CONSTANT_KIND"
,    SingletonKind = "SINGLETON_KIND"
,    ShuffleKind = "SHUFFLE_KIND"
}


// TransformSummary
/** 
 * Description of the type, names/ids, and input/outputs for a transform.
**/
export class TransformSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayData", elemType: shared.DisplayData })
  displayData?: DisplayData[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inputCollectionName" })
  inputCollectionName?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: TransformSummaryKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputCollectionName" })
  outputCollectionName?: string[];
}
