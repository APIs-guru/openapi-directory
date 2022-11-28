import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatusCause
/** 
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
**/
export class StatusCause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
