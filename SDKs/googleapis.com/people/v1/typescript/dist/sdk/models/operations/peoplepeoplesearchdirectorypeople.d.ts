import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum {
    DirectoryMergeSourceTypeUnspecified = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED",
    DirectoryMergeSourceTypeContact = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"
}
export declare enum PeoplePeopleSearchDirectoryPeopleSourcesEnum {
    DirectorySourceTypeUnspecified = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED",
    DirectorySourceTypeDomainContact = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT",
    DirectorySourceTypeDomainProfile = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
}
export declare class PeoplePeopleSearchDirectoryPeopleQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    mergeSources?: PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum[];
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    readMask?: string;
    sources?: PeoplePeopleSearchDirectoryPeopleSourcesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleSearchDirectoryPeopleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleSearchDirectoryPeopleRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleSearchDirectoryPeopleQueryParams;
    security: PeoplePeopleSearchDirectoryPeopleSecurity;
}
export declare class PeoplePeopleSearchDirectoryPeopleResponse extends SpeakeasyBase {
    contentType: string;
    searchDirectoryPeopleResponse?: shared.SearchDirectoryPeopleResponse;
    statusCode: number;
}
