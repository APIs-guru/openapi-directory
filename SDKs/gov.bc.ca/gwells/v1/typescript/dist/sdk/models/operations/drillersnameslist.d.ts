import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrillersNamesListQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class DrillersNamesListRequest extends SpeakeasyBase {
    queryParams: DrillersNamesListQueryParams;
}
export declare class DrillersNamesListResponse extends SpeakeasyBase {
    contentType: string;
    personNames?: shared.PersonName[];
    statusCode: number;
}
