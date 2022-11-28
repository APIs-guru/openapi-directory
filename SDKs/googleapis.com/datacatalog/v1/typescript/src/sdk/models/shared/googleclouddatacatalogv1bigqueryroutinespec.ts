import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1BigQueryRoutineSpec
/** 
 * Fields specific for BigQuery routines.
**/
export class GoogleCloudDatacatalogV1BigQueryRoutineSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importedLibraries" })
  importedLibraries?: string[];
}
