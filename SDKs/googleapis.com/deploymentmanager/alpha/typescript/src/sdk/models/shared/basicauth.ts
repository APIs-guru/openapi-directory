import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BasicAuth
/** 
 * Basic Auth used as a credential.
**/
export class BasicAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
