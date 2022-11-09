import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hl7V2Store } from "./hl7v2store";


// ListHl7V2StoresResponse
/** 
 * Lists the HL7v2 stores in the given dataset.
**/
export class ListHl7V2StoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hl7V2Stores", elemType: shared.Hl7V2Store })
  hl7V2Stores?: Hl7V2Store[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
