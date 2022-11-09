import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVVersionSitesSiteIdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_Ids" })
  siteIds: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetVVersionSitesSiteIdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVVersionSitesSiteIdsPathParams;
}


export class GetVVersionSitesSiteIdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteResponse?: shared.SiteResponse;

  @Metadata()
  statusCode: number;
}
