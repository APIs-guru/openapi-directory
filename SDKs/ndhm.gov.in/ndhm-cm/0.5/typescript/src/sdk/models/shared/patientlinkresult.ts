import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { RequestReference } from "./requestreference";



export class PatientLinkResultPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContexts", elemType: CareContextRepresentation })
  careContexts: CareContextRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=display" })
  display: string;

  @SpeakeasyMetadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientLinkResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: PatientLinkResultPatient;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
