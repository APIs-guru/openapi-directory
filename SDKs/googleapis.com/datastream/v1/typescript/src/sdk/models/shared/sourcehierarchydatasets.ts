import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetTemplate } from "./datasettemplate";



// SourceHierarchyDatasets
/** 
 * Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
**/
export class SourceHierarchyDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetTemplate" })
  datasetTemplate?: DatasetTemplate;
}
