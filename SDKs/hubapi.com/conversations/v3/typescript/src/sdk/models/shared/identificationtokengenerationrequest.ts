import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentificationTokenGenerationRequest
/** 
 * Information used to generate a token
**/
export class IdentificationTokenGenerationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;
}
