import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchSavedColumnsListPathParams extends SpeakeasyBase {
    advertiserId: string;
    agencyId: string;
}
export declare class DoubleclicksearchSavedColumnsListQueryParams extends SpeakeasyBase {
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
export declare class DoubleclicksearchSavedColumnsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchSavedColumnsListRequest extends SpeakeasyBase {
    pathParams: DoubleclicksearchSavedColumnsListPathParams;
    queryParams: DoubleclicksearchSavedColumnsListQueryParams;
    security: DoubleclicksearchSavedColumnsListSecurity;
}
export declare class DoubleclicksearchSavedColumnsListResponse extends SpeakeasyBase {
    contentType: string;
    savedColumnList?: shared.SavedColumnList;
    statusCode: number;
}
