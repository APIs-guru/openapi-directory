import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Automatic } from "./automatic";
import { UserManaged } from "./usermanaged";
/**
 * A policy that defines the replication and encryption configuration of data.
**/
export declare class Replication extends SpeakeasyBase {
    automatic?: Automatic;
    userManaged?: UserManaged;
}
