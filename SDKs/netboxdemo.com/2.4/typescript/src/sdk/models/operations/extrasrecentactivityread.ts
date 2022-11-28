import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasRecentActivityReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasRecentActivityReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasRecentActivityReadPathParams;
}


export class ExtrasRecentActivityReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userAction?: shared.UserAction;
}
