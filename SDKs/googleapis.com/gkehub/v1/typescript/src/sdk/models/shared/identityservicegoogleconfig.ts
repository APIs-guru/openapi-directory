import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityServiceGoogleConfig
/** 
 * Configuration for the Google Plugin Auth flow.
**/
export class IdentityServiceGoogleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=disable" })
  disable?: boolean;
}
