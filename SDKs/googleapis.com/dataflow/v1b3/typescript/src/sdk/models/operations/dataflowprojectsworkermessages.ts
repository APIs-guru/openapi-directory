import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataflowProjectsWorkerMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DataflowProjectsWorkerMessagesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DataflowProjectsWorkerMessagesSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsWorkerMessagesSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsWorkerMessagesSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsWorkerMessagesSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataflowProjectsWorkerMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DataflowProjectsWorkerMessagesSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DataflowProjectsWorkerMessagesSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DataflowProjectsWorkerMessagesSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: DataflowProjectsWorkerMessagesSecurityOption4;
}


export class DataflowProjectsWorkerMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataflowProjectsWorkerMessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: DataflowProjectsWorkerMessagesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SendWorkerMessagesRequest;

  @SpeakeasyMetadata()
  security: DataflowProjectsWorkerMessagesSecurity;
}


export class DataflowProjectsWorkerMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sendWorkerMessagesResponse?: shared.SendWorkerMessagesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
