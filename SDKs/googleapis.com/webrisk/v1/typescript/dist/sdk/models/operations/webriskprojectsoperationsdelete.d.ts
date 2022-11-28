import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebriskProjectsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebriskProjectsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class WebriskProjectsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: WebriskProjectsOperationsDeletePathParams;
    queryParams: WebriskProjectsOperationsDeleteQueryParams;
}
export declare class WebriskProjectsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
