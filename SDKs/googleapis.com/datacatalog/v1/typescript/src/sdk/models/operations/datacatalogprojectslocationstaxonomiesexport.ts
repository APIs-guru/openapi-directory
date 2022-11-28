import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatacatalogProjectsLocationsTaxonomiesExportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class DatacatalogProjectsLocationsTaxonomiesExportQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serializedTaxonomies" })
  serializedTaxonomies?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomies" })
  taxonomies?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DatacatalogProjectsLocationsTaxonomiesExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DatacatalogProjectsLocationsTaxonomiesExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatacatalogProjectsLocationsTaxonomiesExportPathParams;

  @SpeakeasyMetadata()
  queryParams: DatacatalogProjectsLocationsTaxonomiesExportQueryParams;

  @SpeakeasyMetadata()
  security: DatacatalogProjectsLocationsTaxonomiesExportSecurity;
}


export class DatacatalogProjectsLocationsTaxonomiesExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudDatacatalogV1ExportTaxonomiesResponse?: shared.GoogleCloudDatacatalogV1ExportTaxonomiesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
