import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMatrixCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}

export enum GetMatrixFromCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}

export enum GetMatrixToCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}


export class GetMatrixQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=curbside" })
  curbside?: GetMatrixCurbsideEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fail_fast" })
  failFast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_curbside" })
  fromCurbside?: GetMatrixFromCurbsideEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_point" })
  fromPoint?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_point_hint" })
  fromPointHint?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=out_array" })
  outArray?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" })
  point?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point_hint" })
  pointHint?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=snap_prevention" })
  snapPrevention?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_curbside" })
  toCurbside?: GetMatrixToCurbsideEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_point" })
  toPoint?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_point_hint" })
  toPointHint?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=turn_costs" })
  turnCosts?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: shared.VehicleProfileIdEnum;
}


export class GetMatrixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMatrixQueryParams;
}


export class GetMatrixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ghError?: shared.GhError;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  matrixResponse?: shared.MatrixResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
