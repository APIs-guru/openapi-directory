import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
**/
export declare class ListMeta extends SpeakeasyBase {
    continue?: string;
    resourceVersion?: string;
    selfLink?: string;
}
