import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SitesIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class SitesIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SitesIndexPathParams;
}


export class SitesIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteResponse?: shared.SiteResponse;

  @Metadata()
  statusCode: number;
}
