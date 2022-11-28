import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A user
**/
export declare class InMemoryUser extends SpeakeasyBase {
    email: string;
    metadata: Map<string, string>;
    name: string;
    password: string;
}
