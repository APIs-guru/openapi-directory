import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayGetGroupsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayGetGroupsRequest extends SpeakeasyBase {
    security: SyncPlayGetGroupsSecurity;
}
export declare class SyncPlayGetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupInfoDtos?: shared.GroupInfoDto[];
    statusCode: number;
}
