import { SpeakeasyBase } from "../../../internal/utils";
import { PathFilter } from "./pathfilter";
export declare class CloneVersionRequest extends SpeakeasyBase {
    exclude?: PathFilter;
    finalize?: boolean;
    include?: PathFilter;
    sourceVersion?: string;
}
