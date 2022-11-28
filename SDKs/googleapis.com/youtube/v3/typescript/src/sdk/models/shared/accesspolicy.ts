import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessPolicy
/** 
 * Rights management policy for YouTube resources.
**/
export class AccessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed" })
  allowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exception" })
  exception?: string[];
}
