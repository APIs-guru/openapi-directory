import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1LocationsRequests extends SpeakeasyBase {
    locationInputModel?: shared.LocationInputModel;
    locationInputModel1?: shared.LocationInputModel;
    locationInputModel2?: shared.LocationInputModel;
    locationInputModel3?: shared.LocationInputModel;
}
export declare class PostSetupV1LocationsRequest extends SpeakeasyBase {
    request?: PostSetupV1LocationsRequests;
}
export declare class PostSetupV1LocationsResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
