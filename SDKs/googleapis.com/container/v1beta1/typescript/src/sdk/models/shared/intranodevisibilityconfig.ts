import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntraNodeVisibilityConfig
/** 
 * IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
**/
export class IntraNodeVisibilityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
