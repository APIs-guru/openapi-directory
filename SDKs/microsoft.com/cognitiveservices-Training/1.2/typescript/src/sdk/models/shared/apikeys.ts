import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPair } from "./keypair";
import { KeyPair } from "./keypair";


export class ApiKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=PredictionKeys" })
  predictionKeys?: KeyPair;

  @Metadata({ data: "json, name=TrainingKeys" })
  trainingKeys?: KeyPair;
}
