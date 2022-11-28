import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSizesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSizesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    height?: number;
    iabStandard?: boolean;
    ids?: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    width?: number;
}
export declare class DfareportingSizesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSizesListRequest extends SpeakeasyBase {
    pathParams: DfareportingSizesListPathParams;
    queryParams: DfareportingSizesListQueryParams;
    security: DfareportingSizesListSecurity;
}
export declare class DfareportingSizesListResponse extends SpeakeasyBase {
    contentType: string;
    sizesListResponse?: shared.SizesListResponse;
    statusCode: number;
}
