import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams extends SpeakeasyBase {
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


export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2;
}


export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams;

  @Metadata()
  queryParams: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GlossaryEntry;

  @Metadata()
  security: TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity;
}


export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  glossaryEntry?: shared.GlossaryEntry;

  @Metadata()
  statusCode: number;
}
