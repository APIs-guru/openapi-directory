import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorContext } from "./errorcontext";
import { ServiceContext } from "./servicecontext";
/**
 * An error event which is returned by the Error Reporting system.
**/
export declare class ErrorEvent extends SpeakeasyBase {
    context?: ErrorContext;
    eventTime?: string;
    message?: string;
    serviceContext?: ServiceContext;
}
