import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EphemeralStorageConfig
/** 
 * EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.
**/
export class EphemeralStorageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localSsdCount" })
  localSsdCount?: number;
}
