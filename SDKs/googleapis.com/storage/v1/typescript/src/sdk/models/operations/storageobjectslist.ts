import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageObjectsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}

export enum StorageObjectsListProjectionEnum {
    Full = "full"
,    NoAcl = "noAcl"
}


export class StorageObjectsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=delimiter" })
  delimiter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endOffset" })
  endOffset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeTrailingDelimiter" })
  includeTrailingDelimiter?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: StorageObjectsListProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startOffset" })
  startOffset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=versions" })
  versions?: boolean;
}


export class StorageObjectsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsListSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageObjectsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageObjectsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageObjectsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageObjectsListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: StorageObjectsListSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: StorageObjectsListSecurityOption5;
}


export class StorageObjectsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageObjectsListPathParams;

  @Metadata()
  queryParams: StorageObjectsListQueryParams;

  @Metadata()
  security: StorageObjectsListSecurity;
}


export class StorageObjectsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objects?: shared.Objects;

  @Metadata()
  statusCode: number;
}
