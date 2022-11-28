import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1CrossRegionalSource
/** 
 * Cross-regional source used to import an existing taxonomy into a different region.
**/
export class GoogleCloudDatacatalogV1CrossRegionalSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxonomy" })
  taxonomy?: string;
}
