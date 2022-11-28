import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Process extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crop" })
  crop?: string;

  @SpeakeasyMetadata({ data: "json, name=flip" })
  flip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mirror" })
  mirror?: boolean;

  @SpeakeasyMetadata({ data: "json, name=processing_algorithm" })
  processingAlgorithm: string;

  @SpeakeasyMetadata({ data: "json, name=resize" })
  resize?: string;

  @SpeakeasyMetadata({ data: "json, name=rotate" })
  rotate?: number;
}
