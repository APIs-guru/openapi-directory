import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1BusinessusersRequests extends SpeakeasyBase {
    businessUserInputModel?: shared.BusinessUserInputModel;
    businessUserInputModel1?: shared.BusinessUserInputModel;
    businessUserInputModel2?: shared.BusinessUserInputModel;
    businessUserInputModel3?: shared.BusinessUserInputModel;
}
export declare class PostSetupV1BusinessusersRequest extends SpeakeasyBase {
    request?: PostSetupV1BusinessusersRequests;
}
export declare class PostSetupV1BusinessusersResponse extends SpeakeasyBase {
    businessUserViewModel?: shared.BusinessUserViewModel;
    contentType: string;
    statusCode: number;
}
