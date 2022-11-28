import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Expiry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: Date;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
