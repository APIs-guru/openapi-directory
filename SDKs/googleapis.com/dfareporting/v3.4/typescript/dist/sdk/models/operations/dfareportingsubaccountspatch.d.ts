import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSubaccountsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSubaccountsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingSubaccountsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSubaccountsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingSubaccountsPatchPathParams;
    queryParams: DfareportingSubaccountsPatchQueryParams;
    request?: shared.Subaccount;
    security: DfareportingSubaccountsPatchSecurity;
}
export declare class DfareportingSubaccountsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccount?: shared.Subaccount;
}
