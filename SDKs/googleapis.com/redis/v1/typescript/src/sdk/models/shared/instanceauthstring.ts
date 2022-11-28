import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceAuthString
/** 
 * Instance AUTH string details.
**/
export class InstanceAuthString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authString" })
  authString?: string;
}
