import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1BusinessusersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1BusinessusersIdRequests extends SpeakeasyBase {
    businessUserUpdateModel?: shared.BusinessUserUpdateModel;
    businessUserUpdateModel1?: shared.BusinessUserUpdateModel;
    businessUserUpdateModel2?: shared.BusinessUserUpdateModel;
    businessUserUpdateModel3?: shared.BusinessUserUpdateModel;
}
export declare class PutSetupV1BusinessusersIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1BusinessusersIdPathParams;
    request?: PutSetupV1BusinessusersIdRequests;
}
export declare class PutSetupV1BusinessusersIdResponse extends SpeakeasyBase {
    businessUserViewModel?: shared.BusinessUserViewModel;
    contentType: string;
    statusCode: number;
}
