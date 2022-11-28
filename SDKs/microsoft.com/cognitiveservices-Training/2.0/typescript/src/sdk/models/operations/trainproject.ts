import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrainProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class TrainProjectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class TrainProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrainProjectPathParams;

  @SpeakeasyMetadata()
  headers: TrainProjectHeaders;
}


export class TrainProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  iteration?: shared.Iteration;

  @SpeakeasyMetadata()
  statusCode: number;
}
