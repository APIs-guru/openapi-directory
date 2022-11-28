import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheck } from "./healthcheck";
import { Label } from "./label";
import { Template } from "./template";
export declare class Pool extends SpeakeasyBase {
    autoRestart?: boolean;
    baseInstanceName?: string;
    currentNumReplicas?: number;
    description?: string;
    healthChecks?: HealthCheck[];
    initialNumReplicas?: number;
    labels?: Label[];
    name?: string;
    numReplicas?: number;
    resourceViews?: string[];
    selfLink?: string;
    targetPool?: string;
    targetPools?: string[];
    template?: Template;
    type?: string;
}
