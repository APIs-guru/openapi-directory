import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppEngineVersionEndpoint
/** 
 * Wrapper for app engine service version attributes.
**/
export class AppEngineVersionEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
