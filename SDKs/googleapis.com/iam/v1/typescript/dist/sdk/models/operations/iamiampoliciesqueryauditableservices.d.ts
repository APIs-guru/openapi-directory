import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamIamPoliciesQueryAuditableServicesQueryParams extends SpeakeasyBase {
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
export declare class IamIamPoliciesQueryAuditableServicesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamIamPoliciesQueryAuditableServicesRequest extends SpeakeasyBase {
    queryParams: IamIamPoliciesQueryAuditableServicesQueryParams;
    request?: shared.QueryAuditableServicesRequest;
    security: IamIamPoliciesQueryAuditableServicesSecurity;
}
export declare class IamIamPoliciesQueryAuditableServicesResponse extends SpeakeasyBase {
    contentType: string;
    queryAuditableServicesResponse?: shared.QueryAuditableServicesResponse;
    statusCode: number;
}
