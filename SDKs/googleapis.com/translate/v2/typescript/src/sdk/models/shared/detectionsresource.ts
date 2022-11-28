import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetectionsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=isReliable" })
  isReliable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;
}
