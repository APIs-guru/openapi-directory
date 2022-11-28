import { SpeakeasyBase } from "../../../internal/utils";
import { KeyRing } from "./keyring";
/**
 * Response message for KeyManagementService.ListKeyRings.
**/
export declare class ListKeyRingsResponse extends SpeakeasyBase {
    keyRings?: KeyRing[];
    nextPageToken?: string;
    totalSize?: number;
}
