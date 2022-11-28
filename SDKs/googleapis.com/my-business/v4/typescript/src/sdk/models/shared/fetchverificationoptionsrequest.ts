import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceBusinessContext } from "./servicebusinesscontext";



// FetchVerificationOptionsRequest
/** 
 * Request message for Verifications.FetchVerificationOptions.
**/
export class FetchVerificationOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ServiceBusinessContext;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
