import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasConfigContextsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasConfigContextsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasConfigContextsReadPathParams;
}


export class ExtrasConfigContextsReadResponse extends SpeakeasyBase {
  @Metadata()
  configContext?: shared.ConfigContext;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
