import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIterationPerformancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetIterationPerformanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=overlapThreshold" })
  overlapThreshold?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threshold" })
  threshold?: number;
}


export class GetIterationPerformanceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetIterationPerformanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIterationPerformancePathParams;

  @SpeakeasyMetadata()
  queryParams: GetIterationPerformanceQueryParams;

  @SpeakeasyMetadata()
  headers: GetIterationPerformanceHeaders;
}


export class GetIterationPerformanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  iterationPerformance?: shared.IterationPerformance;

  @SpeakeasyMetadata()
  statusCode: number;
}
