import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HomegraphDevicesQueryQueryParams extends SpeakeasyBase {
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
export declare class HomegraphDevicesQuerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HomegraphDevicesQueryRequest extends SpeakeasyBase {
    queryParams: HomegraphDevicesQueryQueryParams;
    request?: shared.QueryRequest;
    security: HomegraphDevicesQuerySecurity;
}
export declare class HomegraphDevicesQueryResponse extends SpeakeasyBase {
    contentType: string;
    queryResponse?: shared.QueryResponse;
    statusCode: number;
}
