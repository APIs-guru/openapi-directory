import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExportsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetExportsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetExportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExportsPathParams;

  @SpeakeasyMetadata()
  headers: GetExportsHeaders;
}


export class GetExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Export })
  exports?: shared.Export[];

  @SpeakeasyMetadata()
  statusCode: number;
}
