import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasRecentActivityReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasRecentActivityReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasRecentActivityReadPathParams;
}


export class ExtrasRecentActivityReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userAction?: shared.UserAction;
}
