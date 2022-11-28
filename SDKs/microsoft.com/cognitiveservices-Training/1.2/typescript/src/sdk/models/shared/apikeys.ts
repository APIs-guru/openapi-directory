import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";



export class ApiKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictionKeys" })
  predictionKeys?: KeyPair;

  @SpeakeasyMetadata({ data: "json, name=TrainingKeys" })
  trainingKeys?: KeyPair;
}
