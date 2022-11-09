import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseInfo } from "./responseinfo";


export class MatrixResponseHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=invalid_from_points" })
  invalidFromPoints?: number[];

  @Metadata({ data: "json, name=invalid_to_points" })
  invalidToPoints?: number[];

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=point_pairs" })
  pointPairs?: number[][];
}


export class MatrixResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=distances" })
  distances?: number[][];

  @Metadata({ data: "json, name=hints", elemType: shared.MatrixResponseHints })
  hints?: MatrixResponseHints[];

  @Metadata({ data: "json, name=info" })
  info?: ResponseInfo;

  @Metadata({ data: "json, name=times" })
  times?: number[][];

  @Metadata({ data: "json, name=weights" })
  weights?: number[][];
}
