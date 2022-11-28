import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsRow } from "./enterprisecrmcardsrow";
/**
 * The generic data format returned from all connectors.
**/
export declare class EnterpriseCrmCardsTabularData extends SpeakeasyBase {
    headers?: string[];
    rows?: EnterpriseCrmCardsRow[];
}
