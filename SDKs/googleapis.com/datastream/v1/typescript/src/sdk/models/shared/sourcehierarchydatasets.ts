import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetTemplate } from "./datasettemplate";


// SourceHierarchyDatasets
/** 
 * Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
**/
export class SourceHierarchyDatasets extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetTemplate" })
  datasetTemplate?: DatasetTemplate;
}
