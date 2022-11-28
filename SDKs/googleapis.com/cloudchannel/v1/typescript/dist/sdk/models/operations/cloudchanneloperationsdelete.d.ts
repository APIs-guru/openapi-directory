import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudchannelOperationsDeletePathParams;
    queryParams: CloudchannelOperationsDeleteQueryParams;
    security: CloudchannelOperationsDeleteSecurity;
}
export declare class CloudchannelOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
