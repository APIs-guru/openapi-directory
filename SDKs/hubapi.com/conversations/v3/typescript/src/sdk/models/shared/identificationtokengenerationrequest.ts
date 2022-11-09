import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentificationTokenGenerationRequest
/** 
 * Information used to generate a token
**/
export class IdentificationTokenGenerationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;
}
