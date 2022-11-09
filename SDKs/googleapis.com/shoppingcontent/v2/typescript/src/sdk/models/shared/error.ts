import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Error
/** 
 * An error returned by the API.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
