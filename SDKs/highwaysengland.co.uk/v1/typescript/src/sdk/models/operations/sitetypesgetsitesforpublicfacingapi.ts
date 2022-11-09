import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SiteTypesGetSitesForPublicFacingApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteType_Id" })
  siteTypeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class SiteTypesGetSitesForPublicFacingApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SiteTypesGetSitesForPublicFacingApiPathParams;
}


export class SiteTypesGetSitesForPublicFacingApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteTypeLayer?: shared.SiteTypeLayer;

  @Metadata()
  statusCode: number;
}
