import { SpeakeasyBase } from "../../../internal/utils";
import { UserManaged } from "./usermanaged";
/**
 * A policy that defines the replication configuration of data.
**/
export declare class Replication extends SpeakeasyBase {
    automatic?: Map<string, any>;
    userManaged?: UserManaged;
}
