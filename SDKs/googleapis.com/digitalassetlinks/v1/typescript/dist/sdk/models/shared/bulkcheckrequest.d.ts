import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { StatementTemplate } from "./statementtemplate";
/**
 * Message used to check for the existence of multiple digital asset links within a single RPC.
**/
export declare class BulkCheckRequest extends SpeakeasyBase {
    allowGoogleInternalDataSources?: boolean;
    defaultRelation?: string;
    defaultSource?: Asset;
    defaultTarget?: Asset;
    skipCacheLookup?: boolean;
    statements?: StatementTemplate[];
}
