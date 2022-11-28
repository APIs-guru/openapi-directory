import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersPartialUpdatePathParams extends SpeakeasyBase {
    userId: string;
}
/**
 * The properties of the user entity.
**/
export declare class UsersPartialUpdateUserAttributesInput extends SpeakeasyBase {
    familyName?: string;
    fullName: string;
    givenName?: string;
    locale?: string;
    middleNames?: string;
    suffix?: string;
    timezone?: string;
}
export declare class UsersPartialUpdateUserInput extends SpeakeasyBase {
    attributes: UsersPartialUpdateUserAttributesInput;
}
export declare class UsersPartialUpdateRequest extends SpeakeasyBase {
    pathParams: UsersPartialUpdatePathParams;
    request: UsersPartialUpdateUserInput;
}
export declare class UsersPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
