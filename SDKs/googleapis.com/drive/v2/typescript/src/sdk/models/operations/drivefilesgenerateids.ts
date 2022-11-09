import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DriveFilesGenerateIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=space" })
  space?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class DriveFilesGenerateIdsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesGenerateIdsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesGenerateIdsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveFilesGenerateIdsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DriveFilesGenerateIdsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DriveFilesGenerateIdsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DriveFilesGenerateIdsSecurityOption3;
}


export class DriveFilesGenerateIdsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DriveFilesGenerateIdsQueryParams;

  @Metadata()
  security: DriveFilesGenerateIdsSecurity;
}


export class DriveFilesGenerateIdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  generatedIds?: shared.GeneratedIds;

  @Metadata()
  statusCode: number;
}
