import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProcessesListResponse extends SpeakeasyBase {
    contentType: string;
    process?: shared.Process;
    statusCode: number;
}
