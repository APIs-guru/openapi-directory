import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentLiasettingsSetinventoryverificationcontactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=merchantId" })
  merchantId: string;
}


export class ContentLiasettingsSetinventoryverificationcontactQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contactEmail" })
  contactEmail: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contactName" })
  contactName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ContentLiasettingsSetinventoryverificationcontactSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContentLiasettingsSetinventoryverificationcontactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentLiasettingsSetinventoryverificationcontactPathParams;

  @Metadata()
  queryParams: ContentLiasettingsSetinventoryverificationcontactQueryParams;

  @Metadata()
  security: ContentLiasettingsSetinventoryverificationcontactSecurity;
}


export class ContentLiasettingsSetinventoryverificationcontactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  liasettingsSetInventoryVerificationContactResponse?: shared.LiasettingsSetInventoryVerificationContactResponse;

  @Metadata()
  statusCode: number;
}
