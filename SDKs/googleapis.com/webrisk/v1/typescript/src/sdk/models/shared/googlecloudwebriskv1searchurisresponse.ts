import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1SearchUrisResponseThreatUri } from "./googlecloudwebriskv1searchurisresponsethreaturi";


export class GoogleCloudWebriskV1SearchUrisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=threat" })
  threat?: GoogleCloudWebriskV1SearchUrisResponseThreatUri;
}
