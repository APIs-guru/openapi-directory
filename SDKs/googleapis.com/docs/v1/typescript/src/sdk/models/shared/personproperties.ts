import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PersonProperties
/** 
 * Properties specific to a linked Person.
**/
export class PersonProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
