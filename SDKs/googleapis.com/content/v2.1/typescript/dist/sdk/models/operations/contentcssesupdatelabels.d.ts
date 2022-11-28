import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentCssesUpdatelabelsPathParams extends SpeakeasyBase {
    cssDomainId: string;
    cssGroupId: string;
}
export declare class ContentCssesUpdatelabelsQueryParams extends SpeakeasyBase {
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
export declare class ContentCssesUpdatelabelsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentCssesUpdatelabelsRequest extends SpeakeasyBase {
    pathParams: ContentCssesUpdatelabelsPathParams;
    queryParams: ContentCssesUpdatelabelsQueryParams;
    request?: shared.LabelIds;
    security: ContentCssesUpdatelabelsSecurity;
}
export declare class ContentCssesUpdatelabelsResponse extends SpeakeasyBase {
    contentType: string;
    css?: shared.Css;
    statusCode: number;
}
