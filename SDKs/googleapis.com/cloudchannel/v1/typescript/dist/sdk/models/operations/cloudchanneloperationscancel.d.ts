import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelOperationsCancelRequest extends SpeakeasyBase {
    pathParams: CloudchannelOperationsCancelPathParams;
    queryParams: CloudchannelOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: CloudchannelOperationsCancelSecurity;
}
export declare class CloudchannelOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
