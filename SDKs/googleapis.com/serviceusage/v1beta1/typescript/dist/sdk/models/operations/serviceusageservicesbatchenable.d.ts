import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesBatchEnablePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesBatchEnableQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesBatchEnableSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesBatchEnableSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesBatchEnableSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesBatchEnableSecurityOption1;
    option2?: ServiceusageServicesBatchEnableSecurityOption2;
}
export declare class ServiceusageServicesBatchEnableRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesBatchEnablePathParams;
    queryParams: ServiceusageServicesBatchEnableQueryParams;
    request?: shared.BatchEnableServicesRequest;
    security: ServiceusageServicesBatchEnableSecurity;
}
export declare class ServiceusageServicesBatchEnableResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
