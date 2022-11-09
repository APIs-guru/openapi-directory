import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceAuthString
/** 
 * Instance AUTH string details.
**/
export class InstanceAuthString extends SpeakeasyBase {
  @Metadata({ data: "json, name=authString" })
  authString?: string;
}
