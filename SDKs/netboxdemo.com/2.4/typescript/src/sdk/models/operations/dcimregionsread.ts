import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRegionsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRegionsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRegionsReadPathParams;
}


export class DcimRegionsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  region?: shared.Region;

  @SpeakeasyMetadata()
  statusCode: number;
}
