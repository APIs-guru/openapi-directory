import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ServicesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ServicesIdRequests extends SpeakeasyBase {
    serviceUpdateModel?: shared.ServiceUpdateModel;
    serviceUpdateModel1?: shared.ServiceUpdateModel;
    serviceUpdateModel2?: shared.ServiceUpdateModel;
    serviceUpdateModel3?: shared.ServiceUpdateModel;
}
export declare class PutSetupV1ServicesIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ServicesIdPathParams;
    request?: PutSetupV1ServicesIdRequests;
}
export declare class PutSetupV1ServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}
