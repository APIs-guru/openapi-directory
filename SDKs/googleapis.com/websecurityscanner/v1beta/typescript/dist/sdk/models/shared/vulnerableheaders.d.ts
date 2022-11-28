import { SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";
/**
 * Information about vulnerable or missing HTTP Headers.
**/
export declare class VulnerableHeaders extends SpeakeasyBase {
    headers?: Header[];
    missingHeaders?: Header[];
}
