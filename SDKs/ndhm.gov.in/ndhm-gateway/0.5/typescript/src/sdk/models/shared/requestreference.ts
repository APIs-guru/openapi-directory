import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RequestReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;
}
