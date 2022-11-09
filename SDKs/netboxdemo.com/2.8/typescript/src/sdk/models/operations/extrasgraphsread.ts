import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasGraphsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasGraphsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasGraphsReadPathParams;
}


export class ExtrasGraphsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graph?: shared.Graph;

  @Metadata()
  statusCode: number;
}
