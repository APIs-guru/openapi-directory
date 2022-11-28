import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenomicsProjectsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GenomicsProjectsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GenomicsProjectsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsProjectsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsProjectsOperationsListSecurity extends SpeakeasyBase {
    option1?: GenomicsProjectsOperationsListSecurityOption1;
    option2?: GenomicsProjectsOperationsListSecurityOption2;
}
export declare class GenomicsProjectsOperationsListRequest extends SpeakeasyBase {
    pathParams: GenomicsProjectsOperationsListPathParams;
    queryParams: GenomicsProjectsOperationsListQueryParams;
    security: GenomicsProjectsOperationsListSecurity;
}
export declare class GenomicsProjectsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
