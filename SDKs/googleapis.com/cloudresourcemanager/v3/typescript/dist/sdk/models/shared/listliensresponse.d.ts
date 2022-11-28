import { SpeakeasyBase } from "../../../internal/utils";
import { Lien } from "./lien";
/**
 * The response message for Liens.ListLiens.
**/
export declare class ListLiensResponse extends SpeakeasyBase {
    liens?: Lien[];
    nextPageToken?: string;
}
