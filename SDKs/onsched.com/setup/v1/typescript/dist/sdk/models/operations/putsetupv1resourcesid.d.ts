import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ResourcesIdQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    outlookAuthReturnUrl?: string;
}
export declare class PutSetupV1ResourcesIdRequests extends SpeakeasyBase {
    resourceUpdateModel?: shared.ResourceUpdateModel;
    resourceUpdateModel1?: shared.ResourceUpdateModel;
    resourceUpdateModel2?: shared.ResourceUpdateModel;
    resourceUpdateModel3?: shared.ResourceUpdateModel;
}
export declare class PutSetupV1ResourcesIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcesIdPathParams;
    queryParams: PutSetupV1ResourcesIdQueryParams;
    request?: PutSetupV1ResourcesIdRequests;
}
export declare class PutSetupV1ResourcesIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
