import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Folder } from "./folder";
import { Macro } from "./macro";
import { Rule } from "./rule";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
/**
 * Represents a Google Tag Manager Container Version.
**/
export declare class ContainerVersion extends SpeakeasyBase {
    accountId?: string;
    container?: Container;
    containerId?: string;
    containerVersionId?: string;
    deleted?: boolean;
    fingerprint?: string;
    folder?: Folder[];
    macro?: Macro[];
    name?: string;
    notes?: string;
    rule?: Rule[];
    tag?: Tag[];
    trigger?: Trigger[];
    variable?: Variable[];
}
