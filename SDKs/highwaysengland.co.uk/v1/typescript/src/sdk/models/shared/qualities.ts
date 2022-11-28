import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Qualities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Quality" })
  quality?: number;
}
