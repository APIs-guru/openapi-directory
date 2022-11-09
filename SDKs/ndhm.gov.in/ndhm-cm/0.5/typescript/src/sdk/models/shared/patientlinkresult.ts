import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { RequestReference } from "./requestreference";


export class PatientLinkResultPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContexts", elemType: shared.CareContextRepresentation })
  careContexts: CareContextRepresentation[];

  @Metadata({ data: "json, name=display" })
  display: string;

  @Metadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientLinkResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=patient" })
  patient?: PatientLinkResultPatient;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
