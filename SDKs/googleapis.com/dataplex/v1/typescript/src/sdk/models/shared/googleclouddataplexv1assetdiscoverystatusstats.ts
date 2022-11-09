import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1AssetDiscoveryStatusStats
/** 
 * The aggregated data statistics for the asset reported by discovery.
**/
export class GoogleCloudDataplexV1AssetDiscoveryStatusStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataItems" })
  dataItems?: string;

  @Metadata({ data: "json, name=dataSize" })
  dataSize?: string;

  @Metadata({ data: "json, name=filesets" })
  filesets?: string;

  @Metadata({ data: "json, name=tables" })
  tables?: string;
}
