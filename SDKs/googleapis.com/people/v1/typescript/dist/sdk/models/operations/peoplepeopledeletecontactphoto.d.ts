import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleDeleteContactPhotoPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare enum PeoplePeopleDeleteContactPhotoSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeoplePeopleDeleteContactPhotoQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    personFields?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sources?: PeoplePeopleDeleteContactPhotoSourcesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleDeleteContactPhotoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleDeleteContactPhotoRequest extends SpeakeasyBase {
    pathParams: PeoplePeopleDeleteContactPhotoPathParams;
    queryParams: PeoplePeopleDeleteContactPhotoQueryParams;
    security: PeoplePeopleDeleteContactPhotoSecurity;
}
export declare class PeoplePeopleDeleteContactPhotoResponse extends SpeakeasyBase {
    contentType: string;
    deleteContactPhotoResponse?: shared.DeleteContactPhotoResponse;
    statusCode: number;
}
