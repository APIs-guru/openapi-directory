import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseeListResult } from "./licenseelistresult";
export declare class LicenseeListResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: LicenseeListResult;
}
