import { SpeakeasyBase } from "../../../internal/utils";
export declare class Role extends SpeakeasyBase {
    description?: string;
    id?: number;
    name: string;
    prefixCount?: number;
    slug: string;
    vlanCount?: number;
    weight?: number;
}
export declare class RoleInput extends SpeakeasyBase {
    description?: string;
    name: string;
    slug: string;
    weight?: number;
}
