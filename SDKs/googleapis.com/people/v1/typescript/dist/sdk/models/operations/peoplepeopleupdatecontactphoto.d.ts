import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleUpdateContactPhotoPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class PeoplePeopleUpdateContactPhotoQueryParams extends SpeakeasyBase {
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
export declare class PeoplePeopleUpdateContactPhotoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleUpdateContactPhotoRequest extends SpeakeasyBase {
    pathParams: PeoplePeopleUpdateContactPhotoPathParams;
    queryParams: PeoplePeopleUpdateContactPhotoQueryParams;
    request?: shared.UpdateContactPhotoRequest;
    security: PeoplePeopleUpdateContactPhotoSecurity;
}
export declare class PeoplePeopleUpdateContactPhotoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateContactPhotoResponse?: shared.UpdateContactPhotoResponse;
}
