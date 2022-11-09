import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessPolicy
/** 
 * Rights management policy for YouTube resources.
**/
export class AccessPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed" })
  allowed?: boolean;

  @Metadata({ data: "json, name=exception" })
  exception?: string[];
}
