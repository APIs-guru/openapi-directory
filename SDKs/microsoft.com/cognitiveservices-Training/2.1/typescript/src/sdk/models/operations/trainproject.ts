import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TrainProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class TrainProjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class TrainProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TrainProjectPathParams;

  @Metadata()
  headers: TrainProjectHeaders;
}


export class TrainProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  iteration?: shared.Iteration;

  @Metadata()
  statusCode: number;
}
