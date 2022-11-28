import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributesConfig" })
  attributesConfig: string;
}


export class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeQueryParams extends SpeakeasyBase {
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


export class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributePathParams;

  @SpeakeasyMetadata()
  queryParams: RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput;

  @SpeakeasyMetadata()
  security: RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity;
}


export class RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudRetailV2AttributesConfig?: shared.GoogleCloudRetailV2AttributesConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
