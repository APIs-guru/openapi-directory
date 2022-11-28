import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An application you have authorized access to your Account through OAuth.
 *
**/
export declare class AuthorizedApp extends SpeakeasyBase {
    created?: Date;
    expiry?: Date;
    id?: number;
    label?: string;
    scopes?: string;
    thumbnailUrl?: string;
    website?: string;
}
