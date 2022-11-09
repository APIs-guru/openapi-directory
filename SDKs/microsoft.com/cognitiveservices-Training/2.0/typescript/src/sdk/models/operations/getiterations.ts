import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIterationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetIterationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetIterationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIterationsPathParams;

  @Metadata()
  headers: GetIterationsHeaders;
}


export class GetIterationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Iteration })
  iterations?: shared.Iteration[];

  @Metadata()
  statusCode: number;
}
