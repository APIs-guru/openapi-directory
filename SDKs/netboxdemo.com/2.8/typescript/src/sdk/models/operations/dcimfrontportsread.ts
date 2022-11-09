import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimFrontPortsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortsReadPathParams;
}


export class DcimFrontPortsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  frontPort?: shared.FrontPort;

  @Metadata()
  statusCode: number;
}
