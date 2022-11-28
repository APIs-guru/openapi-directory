import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesIdRecoverPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ResourcesIdRecoverQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    outlookAuthReturnUrl?: string;
}
export declare class PutSetupV1ResourcesIdRecoverRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcesIdRecoverPathParams;
    queryParams: PutSetupV1ResourcesIdRecoverQueryParams;
}
export declare class PutSetupV1ResourcesIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
