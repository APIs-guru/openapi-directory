import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityServiceGoogleConfig
/** 
 * Configuration for the Google Plugin Auth flow.
**/
export class IdentityServiceGoogleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disable" })
  disable?: boolean;
}
