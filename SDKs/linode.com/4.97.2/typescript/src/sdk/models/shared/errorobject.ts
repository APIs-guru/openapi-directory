import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorObject
/** 
 * An object for describing a single error that occurred during the processing of a request.
 * 
**/
export class ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
