import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EphemeralStorageConfig
/** 
 * EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.
**/
export class EphemeralStorageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=localSsdCount" })
  localSsdCount?: number;
}
