import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
