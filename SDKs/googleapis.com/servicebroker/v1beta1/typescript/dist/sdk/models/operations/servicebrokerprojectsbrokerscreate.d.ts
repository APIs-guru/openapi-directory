import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicebrokerProjectsBrokersCreateQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersCreateRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersCreatePathParams;
    queryParams: ServicebrokerProjectsBrokersCreateQueryParams;
    request?: shared.GoogleCloudServicebrokerV1beta1Broker;
    security: ServicebrokerProjectsBrokersCreateSecurity;
}
export declare class ServicebrokerProjectsBrokersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
