import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomClass } from "./customclass";



// ListCustomClassesResponse
/** 
 * Message returned to the client by the `ListCustomClasses` method.
**/
export class ListCustomClassesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customClasses", elemType: CustomClass })
  customClasses?: CustomClass[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
