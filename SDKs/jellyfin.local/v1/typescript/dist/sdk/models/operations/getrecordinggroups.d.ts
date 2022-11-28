import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordingGroupsQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetRecordingGroupsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRecordingGroupsRequest extends SpeakeasyBase {
    queryParams: GetRecordingGroupsQueryParams;
    security: GetRecordingGroupsSecurity;
}
export declare class GetRecordingGroupsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
