import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeField } from "./creativefield";



// CreativeFieldsListResponse
/** 
 * Creative Field List Response
**/
export class CreativeFieldsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeFields", elemType: CreativeField })
  creativeFields?: CreativeField[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
