import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesBulkQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    outlookAuthReturnUrl?: string;
}
export declare class PutSetupV1ResourcesBulkRequests extends SpeakeasyBase {
    resourcesUpdateModel?: Map<string, any>;
    resourcesUpdateModel1?: Map<string, any>;
    resourcesUpdateModel2?: Map<string, any>;
    resourcesUpdateModel3?: Map<string, any>;
}
export declare class PutSetupV1ResourcesBulkRequest extends SpeakeasyBase {
    queryParams: PutSetupV1ResourcesBulkQueryParams;
    request?: PutSetupV1ResourcesBulkRequests;
}
export declare class PutSetupV1ResourcesBulkResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModels?: shared.ResourceViewModel[];
    statusCode: number;
}
