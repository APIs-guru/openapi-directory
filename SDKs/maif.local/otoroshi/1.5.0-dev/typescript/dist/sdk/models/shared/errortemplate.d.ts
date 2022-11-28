import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error templates for a service descriptor
**/
export declare class ErrorTemplate extends SpeakeasyBase {
    messages: Map<string, string>;
    serviceId: string;
    template40x: string;
    template50x: string;
    templateBuild: string;
    templateMaintenance: string;
}
