import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CareContext } from "./carecontext";


export class PatientLinkReferenceRequestPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContexts", elemType: shared.CareContext })
  careContexts: CareContext[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientLinkReferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=patient" })
  patient: PatientLinkReferenceRequestPatient;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}
