import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1LocationsBulkRequests extends SpeakeasyBase {
    locationsInputModel?: Map<string, any>;
    locationsInputModel1?: Map<string, any>;
    locationsInputModel2?: Map<string, any>;
    locationsInputModel3?: Map<string, any>;
}
export declare class PostSetupV1LocationsBulkRequest extends SpeakeasyBase {
    request?: PostSetupV1LocationsBulkRequests;
}
export declare class PostSetupV1LocationsBulkResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModels?: shared.LocationViewModel[];
    statusCode: number;
}
