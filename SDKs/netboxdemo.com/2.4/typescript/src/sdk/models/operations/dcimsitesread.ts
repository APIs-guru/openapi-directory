import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimSitesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimSitesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimSitesReadPathParams;
}


export class DcimSitesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  site?: shared.Site;

  @SpeakeasyMetadata()
  statusCode: number;
}
