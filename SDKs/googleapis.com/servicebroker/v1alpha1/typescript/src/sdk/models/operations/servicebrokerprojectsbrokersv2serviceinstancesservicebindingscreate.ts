import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=binding_id" })
  bindingId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=acceptsIncomplete" })
  acceptsIncomplete?: boolean;

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


export class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams;

  @Metadata()
  queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudServicebrokerV1alpha1Binding;

  @Metadata()
  security: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity;
}


export class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
