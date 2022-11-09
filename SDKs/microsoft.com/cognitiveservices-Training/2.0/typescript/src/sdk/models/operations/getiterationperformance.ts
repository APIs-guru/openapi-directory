import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIterationPerformancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetIterationPerformanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=overlapThreshold" })
  overlapThreshold?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=threshold" })
  threshold?: number;
}


export class GetIterationPerformanceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetIterationPerformanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIterationPerformancePathParams;

  @Metadata()
  queryParams: GetIterationPerformanceQueryParams;

  @Metadata()
  headers: GetIterationPerformanceHeaders;
}


export class GetIterationPerformanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  iterationPerformance?: shared.IterationPerformance;

  @Metadata()
  statusCode: number;
}
