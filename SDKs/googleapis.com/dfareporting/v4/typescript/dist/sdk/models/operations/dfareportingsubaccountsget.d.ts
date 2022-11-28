import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSubaccountsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingSubaccountsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingSubaccountsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSubaccountsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingSubaccountsGetPathParams;
    queryParams: DfareportingSubaccountsGetQueryParams;
    security: DfareportingSubaccountsGetSecurity;
}
export declare class DfareportingSubaccountsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccount?: shared.Subaccount;
}
