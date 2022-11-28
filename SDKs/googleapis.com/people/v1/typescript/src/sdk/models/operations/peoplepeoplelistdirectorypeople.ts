import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PeoplePeopleListDirectoryPeopleMergeSourcesEnum {
    DirectoryMergeSourceTypeUnspecified = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED",
    DirectoryMergeSourceTypeContact = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"
}

export enum PeoplePeopleListDirectoryPeopleSourcesEnum {
    DirectorySourceTypeUnspecified = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED",
    DirectorySourceTypeDomainContact = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT",
    DirectorySourceTypeDomainProfile = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
}


export class PeoplePeopleListDirectoryPeopleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mergeSources" })
  mergeSources?: PeoplePeopleListDirectoryPeopleMergeSourcesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" })
  readMask?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestSyncToken" })
  requestSyncToken?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources?: PeoplePeopleListDirectoryPeopleSourcesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" })
  syncToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PeoplePeopleListDirectoryPeopleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleListDirectoryPeopleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PeoplePeopleListDirectoryPeopleQueryParams;

  @SpeakeasyMetadata()
  security: PeoplePeopleListDirectoryPeopleSecurity;
}


export class PeoplePeopleListDirectoryPeopleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDirectoryPeopleResponse?: shared.ListDirectoryPeopleResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
