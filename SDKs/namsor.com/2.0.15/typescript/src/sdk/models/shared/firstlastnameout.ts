import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirstLastNameOut
/** 
 * First / last name structure corresponding to the most likely parsing.
**/
export class FirstLastNameOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
