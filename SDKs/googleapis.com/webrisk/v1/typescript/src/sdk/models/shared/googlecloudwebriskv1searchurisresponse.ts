import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1SearchUrisResponseThreatUri } from "./googlecloudwebriskv1searchurisresponsethreaturi";



export class GoogleCloudWebriskV1SearchUrisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=threat" })
  threat?: GoogleCloudWebriskV1SearchUrisResponseThreatUri;
}
