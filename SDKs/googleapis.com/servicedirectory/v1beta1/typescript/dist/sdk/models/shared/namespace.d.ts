import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
**/
export declare class Namespace extends SpeakeasyBase {
    createTime?: string;
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
}
