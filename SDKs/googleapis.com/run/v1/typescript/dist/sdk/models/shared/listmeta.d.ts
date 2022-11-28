import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
**/
export declare class ListMeta extends SpeakeasyBase {
    continue?: string;
    resourceVersion?: string;
    selfLink?: string;
}
