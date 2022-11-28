import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsFilesGetPathParams extends SpeakeasyBase {
    fileId: string;
    profileId: string;
    reportId: string;
}
export declare class DfareportingReportsFilesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingReportsFilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsFilesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsFilesGetPathParams;
    queryParams: DfareportingReportsFilesGetQueryParams;
    security: DfareportingReportsFilesGetSecurity;
}
export declare class DfareportingReportsFilesGetResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
