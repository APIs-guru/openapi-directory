import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Qualities extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Quality" })
  quality?: number;
}
