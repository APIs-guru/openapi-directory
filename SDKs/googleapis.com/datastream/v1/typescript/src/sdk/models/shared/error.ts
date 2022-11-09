import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Error
/** 
 * Represent a user-facing Error.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: Map<string, string>;

  @Metadata({ data: "json, name=errorTime" })
  errorTime?: string;

  @Metadata({ data: "json, name=errorUuid" })
  errorUuid?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
