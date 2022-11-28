import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSizesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingSizesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingSizesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSizesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingSizesGetPathParams;
    queryParams: DfareportingSizesGetQueryParams;
    security: DfareportingSizesGetSecurity;
}
export declare class DfareportingSizesGetResponse extends SpeakeasyBase {
    contentType: string;
    size?: shared.Size;
    statusCode: number;
}
