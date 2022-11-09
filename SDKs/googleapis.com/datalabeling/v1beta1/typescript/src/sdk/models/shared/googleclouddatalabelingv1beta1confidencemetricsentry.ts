import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=f1ScoreAt1" })
  f1ScoreAt1?: number;

  @Metadata({ data: "json, name=f1ScoreAt5" })
  f1ScoreAt5?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=precisionAt1" })
  precisionAt1?: number;

  @Metadata({ data: "json, name=precisionAt5" })
  precisionAt5?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;

  @Metadata({ data: "json, name=recallAt1" })
  recallAt1?: number;

  @Metadata({ data: "json, name=recallAt5" })
  recallAt5?: number;
}
