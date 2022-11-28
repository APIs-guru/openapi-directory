import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrillersListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    ordering?: string;
    search?: string;
}
export declare class DrillersListRequest extends SpeakeasyBase {
    queryParams: DrillersListQueryParams;
}
export declare class DrillersListResponse extends SpeakeasyBase {
    contentType: string;
    personLists?: shared.PersonList[];
    statusCode: number;
}
