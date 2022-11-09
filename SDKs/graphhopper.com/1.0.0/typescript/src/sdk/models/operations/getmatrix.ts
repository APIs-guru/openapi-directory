import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMatrixCurbsideEnum {
    Any = "any"
,    Right = "right"
,    Left = "left"
}

export enum GetMatrixFromCurbsideEnum {
    Any = "any"
,    Right = "right"
,    Left = "left"
}

export enum GetMatrixToCurbsideEnum {
    Any = "any"
,    Right = "right"
,    Left = "left"
}


export class GetMatrixQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=curbside" })
  curbside?: GetMatrixCurbsideEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fail_fast" })
  failFast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from_curbside" })
  fromCurbside?: GetMatrixFromCurbsideEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=from_point" })
  fromPoint?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=from_point_hint" })
  fromPointHint?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=out_array" })
  outArray?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=point_hint" })
  pointHint?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=snap_prevention" })
  snapPrevention?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=to_curbside" })
  toCurbside?: GetMatrixToCurbsideEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=to_point" })
  toPoint?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=to_point_hint" })
  toPointHint?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=turn_costs" })
  turnCosts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: shared.VehicleProfileIdEnum;
}


export class GetMatrixRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMatrixQueryParams;
}


export class GetMatrixResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ghError?: shared.GhError;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  matrixResponse?: shared.MatrixResponse;

  @Metadata()
  statusCode: number;
}
