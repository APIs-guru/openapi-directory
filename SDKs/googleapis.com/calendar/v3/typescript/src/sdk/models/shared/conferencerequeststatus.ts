import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConferenceRequestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
