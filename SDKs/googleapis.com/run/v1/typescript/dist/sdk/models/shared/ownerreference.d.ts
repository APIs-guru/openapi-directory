import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is not supported or used by Cloud Run.
**/
export declare class OwnerReference extends SpeakeasyBase {
    apiVersion?: string;
    blockOwnerDeletion?: boolean;
    controller?: boolean;
    kind?: string;
    name?: string;
    uid?: string;
}
