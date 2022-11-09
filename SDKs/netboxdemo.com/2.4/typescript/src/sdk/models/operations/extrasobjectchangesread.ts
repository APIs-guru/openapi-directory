import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasObjectChangesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasObjectChangesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasObjectChangesReadPathParams;
}


export class ExtrasObjectChangesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectChange?: shared.ObjectChange;

  @Metadata()
  statusCode: number;
}
