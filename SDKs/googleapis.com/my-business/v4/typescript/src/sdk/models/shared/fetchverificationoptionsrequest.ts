import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceBusinessContext } from "./servicebusinesscontext";


// FetchVerificationOptionsRequest
/** 
 * Request message for Verifications.FetchVerificationOptions.
**/
export class FetchVerificationOptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: ServiceBusinessContext;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
