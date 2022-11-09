import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SiteTypesIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class SiteTypesIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SiteTypesIndexPathParams;
}


export class SiteTypesIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteTypeResponse?: shared.SiteTypeResponse;

  @Metadata()
  statusCode: number;
}
