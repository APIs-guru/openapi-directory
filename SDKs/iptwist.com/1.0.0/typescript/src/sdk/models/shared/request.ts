import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;
}
