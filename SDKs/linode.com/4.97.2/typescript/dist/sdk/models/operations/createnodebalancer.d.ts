import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNodeBalancerSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateNodeBalancerRequest extends SpeakeasyBase {
    request: any;
    security: CreateNodeBalancerSecurity;
}
export declare class CreateNodeBalancerResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancer?: shared.NodeBalancer;
    statusCode: number;
    createNodeBalancerDefaultApplicationJsonObject?: CreateNodeBalancerDefaultApplicationJson;
}
