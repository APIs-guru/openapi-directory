import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ServicesBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ServicesBlockIdRequests extends SpeakeasyBase {
    serviceBlockUpdateModel?: shared.ServiceBlockUpdateModel;
    serviceBlockUpdateModel1?: shared.ServiceBlockUpdateModel;
    serviceBlockUpdateModel2?: shared.ServiceBlockUpdateModel;
    serviceBlockUpdateModel3?: shared.ServiceBlockUpdateModel;
}
export declare class PutSetupV1ServicesBlockIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ServicesBlockIdPathParams;
    request?: PutSetupV1ServicesBlockIdRequests;
}
export declare class PutSetupV1ServicesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceBlockViewModel?: shared.ServiceBlockViewModel;
    statusCode: number;
}
