import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ResourcesBulkQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    outlookAuthReturnUrl?: string;
}
export declare class PostSetupV1ResourcesBulkRequests extends SpeakeasyBase {
    resourcesInputModel?: Map<string, any>;
    resourcesInputModel1?: Map<string, any>;
    resourcesInputModel2?: Map<string, any>;
    resourcesInputModel3?: Map<string, any>;
}
export declare class PostSetupV1ResourcesBulkRequest extends SpeakeasyBase {
    queryParams: PostSetupV1ResourcesBulkQueryParams;
    request?: PostSetupV1ResourcesBulkRequests;
}
export declare class PostSetupV1ResourcesBulkResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModels?: shared.ResourceViewModel[];
    statusCode: number;
}
