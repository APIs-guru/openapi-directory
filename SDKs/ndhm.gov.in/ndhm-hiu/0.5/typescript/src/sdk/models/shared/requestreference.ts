import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RequestReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;
}
