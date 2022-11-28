import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Measurement } from "./measurement";



export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measurements", elemType: Measurement })
  measurements?: Measurement[];

  @SpeakeasyMetadata({ data: "json, name=metric-id" })
  metricId?: string;
}
