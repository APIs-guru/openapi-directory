import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SlidesPresentationsBatchUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=presentationId" })
  presentationId: string;
}


export class SlidesPresentationsBatchUpdateQueryParams extends SpeakeasyBase {
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


export class SlidesPresentationsBatchUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsBatchUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsBatchUpdateSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsBatchUpdateSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsBatchUpdateSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsBatchUpdateSecurityOption6 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsBatchUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SlidesPresentationsBatchUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SlidesPresentationsBatchUpdateSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SlidesPresentationsBatchUpdateSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: SlidesPresentationsBatchUpdateSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: SlidesPresentationsBatchUpdateSecurityOption5;

  @Metadata({ data: "security, option=true" })
  option6?: SlidesPresentationsBatchUpdateSecurityOption6;
}


export class SlidesPresentationsBatchUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SlidesPresentationsBatchUpdatePathParams;

  @Metadata()
  queryParams: SlidesPresentationsBatchUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchUpdatePresentationRequest;

  @Metadata()
  security: SlidesPresentationsBatchUpdateSecurity;
}


export class SlidesPresentationsBatchUpdateResponse extends SpeakeasyBase {
  @Metadata()
  batchUpdatePresentationResponse?: shared.BatchUpdatePresentationResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
