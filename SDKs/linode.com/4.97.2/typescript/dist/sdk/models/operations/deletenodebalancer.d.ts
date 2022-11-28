import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNodeBalancerPathParams extends SpeakeasyBase {
    nodeBalancerId: number;
}
export declare class DeleteNodeBalancerSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteNodeBalancerRequest extends SpeakeasyBase {
    pathParams: DeleteNodeBalancerPathParams;
    security: DeleteNodeBalancerSecurity;
}
export declare class DeleteNodeBalancerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteNodeBalancer200ApplicationJsonObject?: Map<string, any>;
    deleteNodeBalancerDefaultApplicationJsonObject?: DeleteNodeBalancerDefaultApplicationJson;
}
