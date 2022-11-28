import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsListposdataprovidersQueryParams extends SpeakeasyBase {
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
export declare class ContentLiasettingsListposdataprovidersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsListposdataprovidersRequest extends SpeakeasyBase {
    queryParams: ContentLiasettingsListposdataprovidersQueryParams;
    security: ContentLiasettingsListposdataprovidersSecurity;
}
export declare class ContentLiasettingsListposdataprovidersResponse extends SpeakeasyBase {
    contentType: string;
    liasettingsListPosDataProvidersResponse?: shared.LiasettingsListPosDataProvidersResponse;
    statusCode: number;
}
