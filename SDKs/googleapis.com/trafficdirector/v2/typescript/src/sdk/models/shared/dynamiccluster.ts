import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DynamicCluster
/** 
 * Describes a dynamically loaded cluster via the CDS API.
**/
export class DynamicCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
