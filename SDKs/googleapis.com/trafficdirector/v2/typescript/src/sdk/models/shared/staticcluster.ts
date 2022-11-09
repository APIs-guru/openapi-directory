import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StaticCluster
/** 
 * Describes a statically loaded cluster.
**/
export class StaticCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: Map<string, any>;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;
}
