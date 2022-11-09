import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Result } from "./result";
export declare class Report extends SpeakeasyBase {
    created?: Date;
    fileId: string;
    processId: number;
    reportNumber: number;
    result?: Result;
    resultId: number;
}
