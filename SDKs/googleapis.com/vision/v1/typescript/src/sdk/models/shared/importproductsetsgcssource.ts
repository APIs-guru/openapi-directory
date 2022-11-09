import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportProductSetsGcsSource
/** 
 * The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.
**/
export class ImportProductSetsGcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=csvFileUri" })
  csvFileUri?: string;
}
