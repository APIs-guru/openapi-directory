import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsStoredInfoTypesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DlpProjectsStoredInfoTypesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsStoredInfoTypesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsStoredInfoTypesDeleteRequest extends SpeakeasyBase {
    pathParams: DlpProjectsStoredInfoTypesDeletePathParams;
    queryParams: DlpProjectsStoredInfoTypesDeleteQueryParams;
    security: DlpProjectsStoredInfoTypesDeleteSecurity;
}
export declare class DlpProjectsStoredInfoTypesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
