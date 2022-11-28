import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSubaccountsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSubaccountsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingSubaccountsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSubaccountsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingSubaccountsInsertPathParams;
    queryParams: DfareportingSubaccountsInsertQueryParams;
    request?: shared.Subaccount;
    security: DfareportingSubaccountsInsertSecurity;
}
export declare class DfareportingSubaccountsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccount?: shared.Subaccount;
}
