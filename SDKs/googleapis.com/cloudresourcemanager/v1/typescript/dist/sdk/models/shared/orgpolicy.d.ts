import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BooleanPolicy } from "./booleanpolicy";
import { ListPolicy } from "./listpolicy";
/**
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export declare class OrgPolicy extends SpeakeasyBase {
    booleanPolicy?: BooleanPolicy;
    constraint?: string;
    etag?: string;
    listPolicy?: ListPolicy;
    restoreDefault?: Map<string, any>;
    updateTime?: string;
    version?: number;
}
