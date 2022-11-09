import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebriskProjectsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebriskProjectsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class WebriskProjectsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: WebriskProjectsOperationsCancelPathParams;
    queryParams: WebriskProjectsOperationsCancelQueryParams;
    request?: Map<string, any>;
}
export declare class WebriskProjectsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
