import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hl7V2Store } from "./hl7v2store";



// ListHl7V2StoresResponse
/** 
 * Lists the HL7v2 stores in the given dataset.
**/
export class ListHl7V2StoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hl7V2Stores", elemType: Hl7V2Store })
  hl7V2Stores?: Hl7V2Store[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
