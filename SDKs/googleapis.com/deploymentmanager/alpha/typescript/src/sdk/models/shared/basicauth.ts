import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BasicAuth
/** 
 * Basic Auth used as a credential.
**/
export class BasicAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}
