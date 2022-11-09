import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PolicysimulatorOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PolicysimulatorOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PolicysimulatorOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PolicysimulatorOperationsGetRequest extends SpeakeasyBase {
    pathParams: PolicysimulatorOperationsGetPathParams;
    queryParams: PolicysimulatorOperationsGetQueryParams;
    security: PolicysimulatorOperationsGetSecurity;
}
export declare class PolicysimulatorOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
