import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirstLastNameOut
/** 
 * First / last name structure corresponding to the most likely parsing.
**/
export class FirstLastNameOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
