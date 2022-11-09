import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatusCause
/** 
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
**/
export class StatusCause extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
