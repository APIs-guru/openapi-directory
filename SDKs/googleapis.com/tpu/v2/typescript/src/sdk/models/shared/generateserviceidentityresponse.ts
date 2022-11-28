import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceIdentity } from "./serviceidentity";



// GenerateServiceIdentityResponse
/** 
 * Response for GenerateServiceIdentity.
**/
export class GenerateServiceIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: ServiceIdentity;
}
