import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LockConfig
/** 
 * Determines whether or no a connection is locked. If locked, a reason must be specified.
**/
export class LockConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
