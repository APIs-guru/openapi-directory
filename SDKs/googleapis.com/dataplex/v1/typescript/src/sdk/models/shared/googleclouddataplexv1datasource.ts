import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataSource
/** 
 * The data source for DataScan.
**/
export class GoogleCloudDataplexV1DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: string;
}
