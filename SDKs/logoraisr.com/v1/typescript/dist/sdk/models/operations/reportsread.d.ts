import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReportsReadPathParams extends SpeakeasyBase {
    reportNumber: string;
}
export declare class ReportsReadRequest extends SpeakeasyBase {
    pathParams: ReportsReadPathParams;
}
export declare class ReportsReadResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
