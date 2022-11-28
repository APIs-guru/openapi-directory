import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetLoggingServiceRequest sets the logging service of a cluster.
**/
export declare class SetLoggingServiceRequest extends SpeakeasyBase {
    clusterId?: string;
    loggingService?: string;
    name?: string;
    projectId?: string;
    zone?: string;
}
