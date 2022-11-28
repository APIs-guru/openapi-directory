import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsIndexDatasourcesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchStatsIndexDatasourcesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fromDateDay?: number;
    fromDateMonth?: number;
    fromDateYear?: number;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    toDateDay?: number;
    toDateMonth?: number;
    toDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchStatsIndexDatasourcesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsIndexDatasourcesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsIndexDatasourcesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsIndexDatasourcesGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsIndexDatasourcesGetSecurityOption1;
    option2?: CloudsearchStatsIndexDatasourcesGetSecurityOption2;
    option3?: CloudsearchStatsIndexDatasourcesGetSecurityOption3;
}
export declare class CloudsearchStatsIndexDatasourcesGetRequest extends SpeakeasyBase {
    pathParams: CloudsearchStatsIndexDatasourcesGetPathParams;
    queryParams: CloudsearchStatsIndexDatasourcesGetQueryParams;
    security: CloudsearchStatsIndexDatasourcesGetSecurity;
}
export declare class CloudsearchStatsIndexDatasourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    getDataSourceIndexStatsResponse?: shared.GetDataSourceIndexStatsResponse;
    statusCode: number;
}
