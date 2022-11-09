import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Person } from "./person";
import { Status } from "./status";


// PersonResponse
/** 
 * The response for a single person
**/
export class PersonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpStatusCode" })
  httpStatusCode?: number;

  @Metadata({ data: "json, name=person" })
  person?: Person;

  @Metadata({ data: "json, name=requestedResourceName" })
  requestedResourceName?: string;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
