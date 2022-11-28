import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudRunRevisionEndpoint
/** 
 * Wrapper for Cloud Run revision attributes.
**/
export class CloudRunRevisionEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
