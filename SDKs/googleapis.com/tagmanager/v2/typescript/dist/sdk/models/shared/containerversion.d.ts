import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltInVariable } from "./builtinvariable";
import { Client } from "./client";
import { Container } from "./container";
import { CustomTemplate } from "./customtemplate";
import { Folder } from "./folder";
import { GtagConfig } from "./gtagconfig";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
import { Zone } from "./zone";
/**
 * Represents a Google Tag Manager Container Version.
**/
export declare class ContainerVersion extends SpeakeasyBase {
    accountId?: string;
    builtInVariable?: BuiltInVariable[];
    client?: Client[];
    container?: Container;
    containerId?: string;
    containerVersionId?: string;
    customTemplate?: CustomTemplate[];
    deleted?: boolean;
    description?: string;
    fingerprint?: string;
    folder?: Folder[];
    gtagConfig?: GtagConfig[];
    name?: string;
    path?: string;
    tag?: Tag[];
    tagManagerUrl?: string;
    trigger?: Trigger[];
    variable?: Variable[];
    zone?: Zone[];
}
