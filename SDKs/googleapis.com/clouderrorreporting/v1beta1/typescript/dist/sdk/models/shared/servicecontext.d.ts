import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.
**/
export declare class ServiceContext extends SpeakeasyBase {
    resourceType?: string;
    service?: string;
    version?: string;
}
