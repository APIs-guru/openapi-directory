import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetIsochroneWeightingEnum {
    Fastest = "fastest",
    Shortest = "shortest"
}


export class GetIsochroneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=buckets" })
  buckets?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distance_limit" })
  distanceLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reverse_flow" })
  reverseFlow?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_limit" })
  timeLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: shared.VehicleProfileIdEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weighting" })
  weighting?: GetIsochroneWeightingEnum;
}


export class GetIsochroneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetIsochroneQueryParams;
}


export class GetIsochroneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ghError?: shared.GhError;

  @SpeakeasyMetadata()
  isochroneResponse?: shared.IsochroneResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
