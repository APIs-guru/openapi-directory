import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Error
/** 
 * Represent a user-facing Error.
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=errorTime" })
  errorTime?: string;

  @SpeakeasyMetadata({ data: "json, name=errorUuid" })
  errorUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
