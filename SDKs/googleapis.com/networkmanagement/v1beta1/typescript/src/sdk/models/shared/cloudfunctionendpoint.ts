import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudFunctionEndpoint
/** 
 * Wrapper for Cloud Function attributes.
**/
export class CloudFunctionEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
