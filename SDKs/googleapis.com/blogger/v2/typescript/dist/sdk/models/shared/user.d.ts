import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The container of blogs for this user.
**/
export declare class UserBlogs extends SpeakeasyBase {
    selfLink?: string;
}
/**
 * This user's locale
**/
export declare class UserLocale extends SpeakeasyBase {
    country?: string;
    language?: string;
    variant?: string;
}
export declare class User extends SpeakeasyBase {
    about?: string;
    blogs?: UserBlogs;
    created?: string;
    displayName?: string;
    id?: string;
    kind?: string;
    locale?: UserLocale;
    selfLink?: string;
    url?: string;
}
