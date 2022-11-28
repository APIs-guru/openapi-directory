import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessChainsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessChainsGetQueryParams extends SpeakeasyBase {
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
export declare class MybusinessChainsGetRequest extends SpeakeasyBase {
    pathParams: MybusinessChainsGetPathParams;
    queryParams: MybusinessChainsGetQueryParams;
}
export declare class MybusinessChainsGetResponse extends SpeakeasyBase {
    chain?: shared.Chain;
    contentType: string;
    statusCode: number;
}
