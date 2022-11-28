import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Consent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
