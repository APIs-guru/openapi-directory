import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure).
**/
export declare class WorkerMessageCode extends SpeakeasyBase {
    code?: string;
    parameters?: Map<string, any>;
}
