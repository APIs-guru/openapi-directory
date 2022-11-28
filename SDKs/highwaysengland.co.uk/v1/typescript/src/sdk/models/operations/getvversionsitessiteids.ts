import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVVersionSitesSiteIdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=site_Ids" })
  siteIds: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetVVersionSitesSiteIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVVersionSitesSiteIdsPathParams;
}


export class GetVVersionSitesSiteIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  siteResponse?: shared.SiteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
