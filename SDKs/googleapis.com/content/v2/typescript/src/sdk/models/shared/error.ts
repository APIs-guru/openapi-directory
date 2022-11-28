import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Error
/** 
 * An error returned by the API.
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
