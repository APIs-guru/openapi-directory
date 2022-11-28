import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1AssetDiscoveryStatusStats
/** 
 * The aggregated data statistics for the asset reported by discovery.
**/
export class GoogleCloudDataplexV1AssetDiscoveryStatusStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataItems" })
  dataItems?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSize" })
  dataSize?: string;

  @SpeakeasyMetadata({ data: "json, name=filesets" })
  filesets?: string;

  @SpeakeasyMetadata({ data: "json, name=tables" })
  tables?: string;
}
