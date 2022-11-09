import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcfsConfig
/** 
 * GcfsConfig contains configurations of Google Container File System (image streaming).
**/
export class GcfsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
