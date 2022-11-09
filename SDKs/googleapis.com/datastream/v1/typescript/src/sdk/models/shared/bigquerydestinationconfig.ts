import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SingleTargetDataset } from "./singletargetdataset";
import { SourceHierarchyDatasets } from "./sourcehierarchydatasets";


export class BigQueryDestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFreshness" })
  dataFreshness?: string;

  @Metadata({ data: "json, name=singleTargetDataset" })
  singleTargetDataset?: SingleTargetDataset;

  @Metadata({ data: "json, name=sourceHierarchyDatasets" })
  sourceHierarchyDatasets?: SourceHierarchyDatasets;
}
