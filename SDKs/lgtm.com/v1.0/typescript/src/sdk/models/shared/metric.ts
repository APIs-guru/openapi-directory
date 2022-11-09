import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Measurement } from "./measurement";


export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=measurements", elemType: shared.Measurement })
  measurements?: Measurement[];

  @Metadata({ data: "json, name=metric-id" })
  metricId?: string;
}
