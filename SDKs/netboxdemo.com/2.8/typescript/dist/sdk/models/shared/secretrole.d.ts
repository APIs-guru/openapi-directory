import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecretRole extends SpeakeasyBase {
    description?: string;
    id?: number;
    name: string;
    secretCount?: number;
    slug: string;
}
export declare class SecretRoleInput extends SpeakeasyBase {
    description?: string;
    name: string;
    slug: string;
}
