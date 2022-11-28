import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsLocationsBatchesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataprocProjectsLocationsBatchesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    batchId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsLocationsBatchesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsLocationsBatchesCreateRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsLocationsBatchesCreatePathParams;
    queryParams: DataprocProjectsLocationsBatchesCreateQueryParams;
    request?: shared.BatchInput;
    security: DataprocProjectsLocationsBatchesCreateSecurity;
}
export declare class DataprocProjectsLocationsBatchesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
