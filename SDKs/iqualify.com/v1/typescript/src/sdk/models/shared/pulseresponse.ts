import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PulseAnswer } from "./pulseanswer";



export class PulseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=learnerFirstName" })
  learnerFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerId" })
  learnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerLastName" })
  learnerLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=pulseBaseId" })
  pulseBaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=pulseInstanceId" })
  pulseInstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=pulseQuestion" })
  pulseQuestion?: string;

  @SpeakeasyMetadata({ data: "json, name=pulseRunDurationMinutes" })
  pulseRunDurationMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=pulseRunStart" })
  pulseRunStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=pulseType" })
  pulseType?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: PulseAnswer;

  @SpeakeasyMetadata({ data: "json, name=responseTime" })
  responseTime?: Date;
}
