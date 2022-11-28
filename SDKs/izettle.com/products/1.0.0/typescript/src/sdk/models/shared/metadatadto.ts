import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceDto } from "./sourcedto";



export class MetadataDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inPos" })
  inPos: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: SourceDto;
}
