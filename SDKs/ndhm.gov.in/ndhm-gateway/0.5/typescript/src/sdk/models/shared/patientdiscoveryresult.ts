import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { PatientRepresentation } from "./patientrepresentation";
import { RequestReference } from "./requestreference";



export class PatientDiscoveryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: PatientRepresentation;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}
