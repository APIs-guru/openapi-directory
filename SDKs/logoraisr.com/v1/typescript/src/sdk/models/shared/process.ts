import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Process extends SpeakeasyBase {
  @Metadata({ data: "json, name=crop" })
  crop?: string;

  @Metadata({ data: "json, name=flip" })
  flip?: boolean;

  @Metadata({ data: "json, name=mirror" })
  mirror?: boolean;

  @Metadata({ data: "json, name=processing_algorithm" })
  processingAlgorithm: string;

  @Metadata({ data: "json, name=resize" })
  resize?: string;

  @Metadata({ data: "json, name=rotate" })
  rotate?: number;
}
