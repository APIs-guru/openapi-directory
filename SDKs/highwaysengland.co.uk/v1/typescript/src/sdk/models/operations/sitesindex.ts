import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SitesIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class SitesIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SitesIndexPathParams;
}


export class SitesIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  siteResponse?: shared.SiteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
