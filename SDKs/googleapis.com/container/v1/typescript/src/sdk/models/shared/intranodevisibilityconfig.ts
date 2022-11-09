import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntraNodeVisibilityConfig
/** 
 * IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
**/
export class IntraNodeVisibilityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
