import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Consent extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
