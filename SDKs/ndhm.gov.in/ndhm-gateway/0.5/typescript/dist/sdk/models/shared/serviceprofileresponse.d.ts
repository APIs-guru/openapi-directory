import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { ServiceRoleEnum } from "./serviceroleenum";
export declare class ServiceProfileResponse extends SpeakeasyBase {
    active?: boolean;
    endpoints?: Endpoint[];
    id?: string;
    name?: string;
    type?: ServiceRoleEnum;
}
