import { SpeakeasyBase } from "../../../internal/utils";
import { Hl7V2Store } from "./hl7v2store";
/**
 * Lists the HL7v2 stores in the given dataset.
**/
export declare class ListHl7V2StoresResponse extends SpeakeasyBase {
    hl7V2Stores?: Hl7V2Store[];
    nextPageToken?: string;
}
