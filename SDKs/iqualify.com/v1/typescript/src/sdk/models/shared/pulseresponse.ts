import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PulseAnswer } from "./pulseanswer";


export class PulseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=learnerFirstName" })
  learnerFirstName?: string;

  @Metadata({ data: "json, name=learnerId" })
  learnerId?: string;

  @Metadata({ data: "json, name=learnerLastName" })
  learnerLastName?: string;

  @Metadata({ data: "json, name=pulseBaseId" })
  pulseBaseId?: string;

  @Metadata({ data: "json, name=pulseInstanceId" })
  pulseInstanceId?: string;

  @Metadata({ data: "json, name=pulseQuestion" })
  pulseQuestion?: string;

  @Metadata({ data: "json, name=pulseRunDurationMinutes" })
  pulseRunDurationMinutes?: number;

  @Metadata({ data: "json, name=pulseRunStart" })
  pulseRunStart?: Date;

  @Metadata({ data: "json, name=pulseType" })
  pulseType?: string;

  @Metadata({ data: "json, name=response" })
  response?: PulseAnswer;

  @Metadata({ data: "json, name=responseTime" })
  responseTime?: Date;
}
