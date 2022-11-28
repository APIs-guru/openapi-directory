import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=f1ScoreAt1" })
  f1ScoreAt1?: number;

  @SpeakeasyMetadata({ data: "json, name=f1ScoreAt5" })
  f1ScoreAt5?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=precisionAt1" })
  precisionAt1?: number;

  @SpeakeasyMetadata({ data: "json, name=precisionAt5" })
  precisionAt5?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=recallAt1" })
  recallAt1?: number;

  @SpeakeasyMetadata({ data: "json, name=recallAt5" })
  recallAt5?: number;
}
