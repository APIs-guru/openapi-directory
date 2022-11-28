import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSizesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSizesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingSizesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSizesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingSizesInsertPathParams;
    queryParams: DfareportingSizesInsertQueryParams;
    request?: shared.Size;
    security: DfareportingSizesInsertSecurity;
}
export declare class DfareportingSizesInsertResponse extends SpeakeasyBase {
    contentType: string;
    size?: shared.Size;
    statusCode: number;
}
