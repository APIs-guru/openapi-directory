import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudDataLineageIntegration
/** 
 * Configuration for Cloud Data Lineage integration.
**/
export class CloudDataLineageIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
