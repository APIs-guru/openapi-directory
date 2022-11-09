import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PersonProperties
/** 
 * Properties specific to a linked Person.
**/
export class PersonProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
