import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivityAttemptOpenResponseFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facilitatorEmail" })
  facilitatorEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
