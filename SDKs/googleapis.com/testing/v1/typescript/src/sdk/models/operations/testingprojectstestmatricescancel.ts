import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestingProjectsTestMatricesCancelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=testMatrixId" })
  testMatrixId: string;
}


export class TestingProjectsTestMatricesCancelQueryParams extends SpeakeasyBase {
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


export class TestingProjectsTestMatricesCancelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TestingProjectsTestMatricesCancelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestingProjectsTestMatricesCancelPathParams;

  @Metadata()
  queryParams: TestingProjectsTestMatricesCancelQueryParams;

  @Metadata()
  security: TestingProjectsTestMatricesCancelSecurity;
}


export class TestingProjectsTestMatricesCancelResponse extends SpeakeasyBase {
  @Metadata()
  cancelTestMatrixResponse?: shared.CancelTestMatrixResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
