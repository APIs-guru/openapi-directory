import { SpeakeasyBase } from "../../../internal/utils";
import { Quota } from "./quota";
/**
 * A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.
**/
export declare class Project extends SpeakeasyBase {
    id?: string;
    kind?: string;
    number?: string;
    quota?: Quota;
}
