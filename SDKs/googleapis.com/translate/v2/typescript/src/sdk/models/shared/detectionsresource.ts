import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetectionsResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=isReliable" })
  isReliable?: boolean;

  @Metadata({ data: "json, name=language" })
  language?: string;
}
