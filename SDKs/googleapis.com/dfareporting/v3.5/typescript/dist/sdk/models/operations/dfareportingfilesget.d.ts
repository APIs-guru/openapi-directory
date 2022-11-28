import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFilesGetPathParams extends SpeakeasyBase {
    fileId: string;
    reportId: string;
}
export declare class DfareportingFilesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFilesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingFilesGetPathParams;
    queryParams: DfareportingFilesGetQueryParams;
    security: DfareportingFilesGetSecurity;
}
export declare class DfareportingFilesGetResponse extends SpeakeasyBase {
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
