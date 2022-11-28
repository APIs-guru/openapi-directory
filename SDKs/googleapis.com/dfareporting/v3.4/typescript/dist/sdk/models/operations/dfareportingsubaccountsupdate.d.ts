import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSubaccountsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSubaccountsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingSubaccountsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSubaccountsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingSubaccountsUpdatePathParams;
    queryParams: DfareportingSubaccountsUpdateQueryParams;
    request?: shared.Subaccount;
    security: DfareportingSubaccountsUpdateSecurity;
}
export declare class DfareportingSubaccountsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccount?: shared.Subaccount;
}
