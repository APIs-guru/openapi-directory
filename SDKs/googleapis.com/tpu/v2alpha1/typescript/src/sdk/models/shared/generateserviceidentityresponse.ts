import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceIdentity } from "./serviceidentity";


// GenerateServiceIdentityResponse
/** 
 * Response for GenerateServiceIdentity.
**/
export class GenerateServiceIdentityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: ServiceIdentity;
}
