import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1LocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1LocationsIdQueryParams extends SpeakeasyBase {
    removeRegion?: boolean;
}
export declare class PutSetupV1LocationsIdRequests extends SpeakeasyBase {
    locationUpdateModel?: shared.LocationUpdateModel;
    locationUpdateModel1?: shared.LocationUpdateModel;
    locationUpdateModel2?: shared.LocationUpdateModel;
    locationUpdateModel3?: shared.LocationUpdateModel;
}
export declare class PutSetupV1LocationsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1LocationsIdPathParams;
    queryParams: PutSetupV1LocationsIdQueryParams;
    request?: PutSetupV1LocationsIdRequests;
}
export declare class PutSetupV1LocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
