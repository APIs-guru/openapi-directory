import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorObject
/** 
 * An object for describing a single error that occurred during the processing of a request.
 * 
**/
export class ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
