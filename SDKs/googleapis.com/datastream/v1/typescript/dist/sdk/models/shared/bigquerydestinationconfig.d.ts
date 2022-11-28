import { SpeakeasyBase } from "../../../internal/utils";
import { SingleTargetDataset } from "./singletargetdataset";
import { SourceHierarchyDatasets } from "./sourcehierarchydatasets";
export declare class BigQueryDestinationConfig extends SpeakeasyBase {
    dataFreshness?: string;
    singleTargetDataset?: SingleTargetDataset;
    sourceHierarchyDatasets?: SourceHierarchyDatasets;
}
