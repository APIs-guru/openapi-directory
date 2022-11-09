import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRegionsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRegionsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRegionsReadPathParams;
}


export class DcimRegionsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  region?: shared.Region;

  @Metadata()
  statusCode: number;
}
