import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SlsaBuilder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
