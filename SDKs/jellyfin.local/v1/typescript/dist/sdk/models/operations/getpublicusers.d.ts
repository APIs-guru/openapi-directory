import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userDtos?: shared.UserDto[];
}
