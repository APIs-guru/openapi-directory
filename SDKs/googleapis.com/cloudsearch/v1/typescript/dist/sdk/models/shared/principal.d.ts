import { SpeakeasyBase } from "../../../internal/utils";
import { GSuitePrincipal } from "./gsuiteprincipal";
/**
 * Reference to a user, group, or domain.
**/
export declare class Principal extends SpeakeasyBase {
    groupResourceName?: string;
    gsuitePrincipal?: GSuitePrincipal;
    userResourceName?: string;
}
