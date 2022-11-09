import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAppsAppIdPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class DeleteAppsAppIdQueryParams extends SpeakeasyBase {
    developerId: string;
}
export declare class DeleteAppsAppIdRequest extends SpeakeasyBase {
    pathParams: DeleteAppsAppIdPathParams;
    queryParams: DeleteAppsAppIdQueryParams;
}
export declare class DeleteAppsAppIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
