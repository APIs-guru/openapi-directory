import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1CrossRegionalSource
/** 
 * Cross-regional source used to import an existing taxonomy into a different region.
**/
export class GoogleCloudDatacatalogV1CrossRegionalSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxonomy" })
  taxonomy?: string;
}
