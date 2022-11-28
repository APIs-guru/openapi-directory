import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SiteTypesIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class SiteTypesIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SiteTypesIndexPathParams;
}


export class SiteTypesIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  siteTypeResponse?: shared.SiteTypeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
