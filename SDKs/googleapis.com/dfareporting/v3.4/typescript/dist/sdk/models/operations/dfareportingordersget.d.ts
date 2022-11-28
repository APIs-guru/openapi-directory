import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingOrdersGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
    projectId: string;
}
export declare class DfareportingOrdersGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingOrdersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingOrdersGetRequest extends SpeakeasyBase {
    pathParams: DfareportingOrdersGetPathParams;
    queryParams: DfareportingOrdersGetQueryParams;
    security: DfareportingOrdersGetSecurity;
}
export declare class DfareportingOrdersGetResponse extends SpeakeasyBase {
    contentType: string;
    order?: shared.Order;
    statusCode: number;
}
