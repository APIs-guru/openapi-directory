import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillJob } from "./backfilljob";
import { Error } from "./error";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";
/**
 * A specific stream object (e.g a specific DB table).
**/
export declare class StreamObject extends SpeakeasyBase {
    backfillJob?: BackfillJob;
    createTime?: string;
    displayName?: string;
    errors?: Error[];
    name?: string;
    sourceObject?: SourceObjectIdentifier;
    updateTime?: string;
}
