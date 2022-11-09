import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConferenceRequestStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
