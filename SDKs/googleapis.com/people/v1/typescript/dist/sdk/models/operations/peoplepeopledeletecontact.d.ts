import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleDeleteContactPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class PeoplePeopleDeleteContactQueryParams extends SpeakeasyBase {
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
export declare class PeoplePeopleDeleteContactSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleDeleteContactRequest extends SpeakeasyBase {
    pathParams: PeoplePeopleDeleteContactPathParams;
    queryParams: PeoplePeopleDeleteContactQueryParams;
    security: PeoplePeopleDeleteContactSecurity;
}
export declare class PeoplePeopleDeleteContactResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
