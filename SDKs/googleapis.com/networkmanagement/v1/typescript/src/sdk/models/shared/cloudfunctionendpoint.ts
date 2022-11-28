import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudFunctionEndpoint
/** 
 * Wrapper for Cloud Function attributes.
**/
export class CloudFunctionEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
