import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Result } from "./result";
export declare class ReportResponse extends SpeakeasyBase {
    created?: Date;
    fileId?: string;
    processingAlgorithm?: string;
    reportNumber?: number;
    result?: Result;
}
