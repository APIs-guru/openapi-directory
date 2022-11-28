import { SpeakeasyBase } from "../../../internal/utils";
export declare class Service extends SpeakeasyBase {
    bootCount?: number;
    config?: Map<string, any>;
    configRequest?: Map<string, any>;
    id?: string;
    name?: string;
    restartRequest?: boolean;
    timeCreated?: string;
    timeUpdated?: string;
    url?: string;
    version?: string;
}
export declare class ServiceInput extends SpeakeasyBase {
    configRequest?: Map<string, any>;
    restartRequest?: boolean;
}
