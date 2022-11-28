import { SpeakeasyBase } from "../../../internal/utils";
import { Attestor } from "./attestor";
/**
 * Response message for BinauthzManagementService.ListAttestors.
**/
export declare class ListAttestorsResponse extends SpeakeasyBase {
    attestors?: Attestor[];
    nextPageToken?: string;
}
