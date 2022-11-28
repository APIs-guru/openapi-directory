import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    isDisabled?: boolean;
    isHidden?: boolean;
}
export declare class GetUsersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
    security: GetUsersSecurity;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userDtos?: shared.UserDto[];
}
