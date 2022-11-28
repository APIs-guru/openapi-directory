import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PeoplePeopleListDirectoryPeopleMergeSourcesEnum {
    DirectoryMergeSourceTypeUnspecified = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED",
    DirectoryMergeSourceTypeContact = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"
}
export declare enum PeoplePeopleListDirectoryPeopleSourcesEnum {
    DirectorySourceTypeUnspecified = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED",
    DirectorySourceTypeDomainContact = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT",
    DirectorySourceTypeDomainProfile = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
}
export declare class PeoplePeopleListDirectoryPeopleQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    mergeSources?: PeoplePeopleListDirectoryPeopleMergeSourcesEnum[];
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    requestSyncToken?: boolean;
    sources?: PeoplePeopleListDirectoryPeopleSourcesEnum[];
    syncToken?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleListDirectoryPeopleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleListDirectoryPeopleRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleListDirectoryPeopleQueryParams;
    security: PeoplePeopleListDirectoryPeopleSecurity;
}
export declare class PeoplePeopleListDirectoryPeopleResponse extends SpeakeasyBase {
    contentType: string;
    listDirectoryPeopleResponse?: shared.ListDirectoryPeopleResponse;
    statusCode: number;
}
