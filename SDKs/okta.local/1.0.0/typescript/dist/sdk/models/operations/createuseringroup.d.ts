import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateUserInGroupQueryParams extends SpeakeasyBase {
    activate?: string;
}
export declare class CreateUserInGroupRequestBodyProfile extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    login?: string;
}
export declare class CreateUserInGroupRequestBody extends SpeakeasyBase {
    groupIds?: string[];
    profile?: CreateUserInGroupRequestBodyProfile;
}
export declare class CreateUserInGroupRequest extends SpeakeasyBase {
    queryParams: CreateUserInGroupQueryParams;
    request?: CreateUserInGroupRequestBody;
}
export declare class CreateUserInGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
