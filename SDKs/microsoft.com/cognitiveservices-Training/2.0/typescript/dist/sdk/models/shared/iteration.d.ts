import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Iteration model to be sent over JSON
**/
export declare class Iteration extends SpeakeasyBase {
    created?: Date;
    domainId?: string;
    exportable?: boolean;
    id?: string;
    isDefault?: boolean;
    lastModified?: Date;
    name?: string;
    projectId?: string;
    status?: string;
    trainedAt?: Date;
}
/**
 * Iteration model to be sent over JSON
**/
export declare class IterationInput extends SpeakeasyBase {
    isDefault?: boolean;
    name?: string;
}
