import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetIsochroneWeightingEnum {
    Fastest = "fastest"
,    Shortest = "shortest"
}


export class GetIsochroneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=buckets" })
  buckets?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distance_limit" })
  distanceLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reverse_flow" })
  reverseFlow?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time_limit" })
  timeLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: shared.VehicleProfileIdEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weighting" })
  weighting?: GetIsochroneWeightingEnum;
}


export class GetIsochroneRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetIsochroneQueryParams;
}


export class GetIsochroneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ghError?: shared.GhError;

  @Metadata()
  isochroneResponse?: shared.IsochroneResponse;

  @Metadata()
  statusCode: number;
}
