import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorContext } from "./errorcontext";
import { ServiceContext } from "./servicecontext";
/**
 * An error event which is reported to the Error Reporting system.
**/
export declare class ReportedErrorEvent extends SpeakeasyBase {
    context?: ErrorContext;
    eventTime?: string;
    message?: string;
    serviceContext?: ServiceContext;
}
