import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ResourcesBlockIdRequests extends SpeakeasyBase {
    resourceBlockUpdateModel?: shared.ResourceBlockUpdateModel;
    resourceBlockUpdateModel1?: shared.ResourceBlockUpdateModel;
    resourceBlockUpdateModel2?: shared.ResourceBlockUpdateModel;
    resourceBlockUpdateModel3?: shared.ResourceBlockUpdateModel;
}
export declare class PutSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcesBlockIdPathParams;
    request?: PutSetupV1ResourcesBlockIdRequests;
}
export declare class PutSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
