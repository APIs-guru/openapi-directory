import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimSitesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimSitesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimSitesReadPathParams;
}


export class DcimSitesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  site?: shared.Site;

  @Metadata()
  statusCode: number;
}
