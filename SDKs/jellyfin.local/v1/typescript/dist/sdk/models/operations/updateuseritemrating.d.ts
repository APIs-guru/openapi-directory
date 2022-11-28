import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserItemRatingPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class UpdateUserItemRatingQueryParams extends SpeakeasyBase {
    likes?: boolean;
}
export declare class UpdateUserItemRatingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateUserItemRatingRequest extends SpeakeasyBase {
    pathParams: UpdateUserItemRatingPathParams;
    queryParams: UpdateUserItemRatingQueryParams;
    security: UpdateUserItemRatingSecurity;
}
export declare class UpdateUserItemRatingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userItemDataDto?: shared.UserItemDataDto;
}
