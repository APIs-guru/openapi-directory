import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasObjectChangesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasObjectChangesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasObjectChangesReadPathParams;
}


export class ExtrasObjectChangesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectChange?: shared.ObjectChange;

  @SpeakeasyMetadata()
  statusCode: number;
}
