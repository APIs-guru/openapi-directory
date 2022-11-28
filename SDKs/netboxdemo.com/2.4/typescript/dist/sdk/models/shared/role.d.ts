import { SpeakeasyBase } from "../../../internal/utils";
export declare class Role extends SpeakeasyBase {
    id?: number;
    name: string;
    slug: string;
    weight?: number;
}
export declare class RoleInput extends SpeakeasyBase {
    name: string;
    slug: string;
    weight?: number;
}
