import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Expiry extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires" })
  expires?: Date;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
