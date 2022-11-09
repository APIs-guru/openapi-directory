import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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


export class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DocumentaiUiv1beta3ProjectsLocationsOperationsCancelPathParams;

  @Metadata()
  queryParams: DocumentaiUiv1beta3ProjectsLocationsOperationsCancelQueryParams;

  @Metadata()
  security: DocumentaiUiv1beta3ProjectsLocationsOperationsCancelSecurity;
}


export class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleProtobufEmpty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
