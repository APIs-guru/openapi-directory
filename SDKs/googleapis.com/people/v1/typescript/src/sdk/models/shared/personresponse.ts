import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
import { Status } from "./status";



// PersonResponse
/** 
 * The response for a single person
**/
export class PersonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpStatusCode" })
  httpStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Person;

  @SpeakeasyMetadata({ data: "json, name=requestedResourceName" })
  requestedResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
