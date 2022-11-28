import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
**/
export declare class OwnerReference extends SpeakeasyBase {
    apiVersion?: string;
    blockOwnerDeletion?: boolean;
    controller?: boolean;
    kind?: string;
    name?: string;
    uid?: string;
}
