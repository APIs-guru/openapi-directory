import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseInfo } from "./responseinfo";



export class MatrixResponseHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_from_points" })
  invalidFromPoints?: number[];

  @SpeakeasyMetadata({ data: "json, name=invalid_to_points" })
  invalidToPoints?: number[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=point_pairs" })
  pointPairs?: number[][];
}


export class MatrixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distances" })
  distances?: number[][];

  @SpeakeasyMetadata({ data: "json, name=hints", elemType: MatrixResponseHints })
  hints?: MatrixResponseHints[];

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: ResponseInfo;

  @SpeakeasyMetadata({ data: "json, name=times" })
  times?: number[][];

  @SpeakeasyMetadata({ data: "json, name=weights" })
  weights?: number[][];
}
