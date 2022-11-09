import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivityAttemptOpenResponseFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=facilitatorEmail" })
  facilitatorEmail?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
