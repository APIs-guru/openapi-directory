import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PeoplePeopleListDirectoryPeopleMergeSourcesEnum {
    DirectoryMergeSourceTypeUnspecified = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED"
,    DirectoryMergeSourceTypeContact = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"
}

export enum PeoplePeopleListDirectoryPeopleSourcesEnum {
    DirectorySourceTypeUnspecified = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
,    DirectorySourceTypeDomainContact = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
,    DirectorySourceTypeDomainProfile = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
}


export class PeoplePeopleListDirectoryPeopleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mergeSources" })
  mergeSources?: PeoplePeopleListDirectoryPeopleMergeSourcesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=readMask" })
  readMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=requestSyncToken" })
  requestSyncToken?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources?: PeoplePeopleListDirectoryPeopleSourcesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=syncToken" })
  syncToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PeoplePeopleListDirectoryPeopleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleListDirectoryPeopleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PeoplePeopleListDirectoryPeopleQueryParams;

  @Metadata()
  security: PeoplePeopleListDirectoryPeopleSecurity;
}


export class PeoplePeopleListDirectoryPeopleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDirectoryPeopleResponse?: shared.ListDirectoryPeopleResponse;

  @Metadata()
  statusCode: number;
}
