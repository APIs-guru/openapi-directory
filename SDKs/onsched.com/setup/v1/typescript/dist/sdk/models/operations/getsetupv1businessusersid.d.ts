import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1BusinessusersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1BusinessusersIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1BusinessusersIdPathParams;
}
export declare class GetSetupV1BusinessusersIdResponse extends SpeakeasyBase {
    businessUserViewModel?: shared.BusinessUserViewModel;
    contentType: string;
    statusCode: number;
}
