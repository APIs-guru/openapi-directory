import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SingleTargetDataset } from "./singletargetdataset";
import { SourceHierarchyDatasets } from "./sourcehierarchydatasets";



export class BigQueryDestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFreshness" })
  dataFreshness?: string;

  @SpeakeasyMetadata({ data: "json, name=singleTargetDataset" })
  singleTargetDataset?: SingleTargetDataset;

  @SpeakeasyMetadata({ data: "json, name=sourceHierarchyDatasets" })
  sourceHierarchyDatasets?: SourceHierarchyDatasets;
}
