import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceDto } from "./sourcedto";


export class MetadataDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=inPos" })
  inPos: boolean;

  @Metadata({ data: "json, name=source" })
  source?: SourceDto;
}
