import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserImageByIndexPathParams extends SpeakeasyBase {
    imageType: shared.ImageTypeEnum;
    index: number;
    userId: string;
}
export declare class DeleteUserImageByIndexSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteUserImageByIndexRequest extends SpeakeasyBase {
    pathParams: DeleteUserImageByIndexPathParams;
    security: DeleteUserImageByIndexSecurity;
}
export declare class DeleteUserImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
