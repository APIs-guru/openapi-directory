import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomClass } from "./customclass";


// ListCustomClassesResponse
/** 
 * Message returned to the client by the `ListCustomClasses` method.
**/
export class ListCustomClassesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customClasses", elemType: shared.CustomClass })
  customClasses?: CustomClass[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
