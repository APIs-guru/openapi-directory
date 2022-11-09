import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AreasGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class AreasGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AreasGetPathParams;
}


export class AreasGetResponse extends SpeakeasyBase {
  @Metadata()
  areaResponse?: shared.AreaResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
