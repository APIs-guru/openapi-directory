import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { PatientRepresentation } from "./patientrepresentation";
import { RequestReference } from "./requestreference";


export class PatientDiscoveryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=patient" })
  patient?: PatientRepresentation;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}
