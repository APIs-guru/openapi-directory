import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SiteTypesGetSitesForPublicFacingApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteType_Id" })
  siteTypeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class SiteTypesGetSitesForPublicFacingApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SiteTypesGetSitesForPublicFacingApiPathParams;
}


export class SiteTypesGetSitesForPublicFacingApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  siteTypeLayer?: shared.SiteTypeLayer;

  @SpeakeasyMetadata()
  statusCode: number;
}
