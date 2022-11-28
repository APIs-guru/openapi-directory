import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCoursesContentIdPermissionsPathParams extends SpeakeasyBase {
    contentId: string;
}
export declare class GetCoursesContentIdPermissionsRequest extends SpeakeasyBase {
    pathParams: GetCoursesContentIdPermissionsPathParams;
}
export declare class GetCoursesContentIdPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    userPermission?: any;
}
