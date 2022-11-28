import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcfsConfig
/** 
 * GcfsConfig contains configurations of Google Container File System (image streaming).
**/
export class GcfsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
