import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DynamicCluster
/** 
 * Describes a dynamically loaded cluster via the CDS API.
**/
export class DynamicCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: Map<string, any>;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
