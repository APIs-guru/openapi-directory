import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserItemRatingPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class DeleteUserItemRatingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteUserItemRatingRequest extends SpeakeasyBase {
    pathParams: DeleteUserItemRatingPathParams;
    security: DeleteUserItemRatingSecurity;
}
export declare class DeleteUserItemRatingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userItemDataDto?: shared.UserItemDataDto;
}
