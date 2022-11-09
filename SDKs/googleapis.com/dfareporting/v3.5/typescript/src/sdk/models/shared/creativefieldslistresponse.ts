import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeField } from "./creativefield";


// CreativeFieldsListResponse
/** 
 * Creative Field List Response
**/
export class CreativeFieldsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeFields", elemType: shared.CreativeField })
  creativeFields?: CreativeField[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
