import { SpeakeasyBase } from "../../../internal/utils";
import { InMemoryUser } from "./inmemoryuser";
/**
 * Settings to authenticate users using the in memory user store
**/
export declare class InMemoryAuthModuleConfig extends SpeakeasyBase {
    desc: string;
    id: string;
    name: string;
    sessionMaxAge: string;
    type: string;
    users: InMemoryUser[];
}
