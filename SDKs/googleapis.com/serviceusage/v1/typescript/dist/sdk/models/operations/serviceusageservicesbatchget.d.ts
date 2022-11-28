import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    names?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServiceusageServicesBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesBatchGetSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesBatchGetSecurityOption1;
    option2?: ServiceusageServicesBatchGetSecurityOption2;
}
export declare class ServiceusageServicesBatchGetRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesBatchGetPathParams;
    queryParams: ServiceusageServicesBatchGetQueryParams;
    security: ServiceusageServicesBatchGetSecurity;
}
export declare class ServiceusageServicesBatchGetResponse extends SpeakeasyBase {
    batchGetServicesResponse?: shared.BatchGetServicesResponse;
    contentType: string;
    statusCode: number;
}
