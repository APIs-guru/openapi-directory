import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIterationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetIterationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetIterationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIterationsPathParams;

  @SpeakeasyMetadata()
  headers: GetIterationsHeaders;
}


export class GetIterationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Iteration })
  iterations?: shared.Iteration[];

  @SpeakeasyMetadata()
  statusCode: number;
}
