import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CareContext } from "./carecontext";



export class PatientLinkReferenceRequestPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContexts", elemType: CareContext })
  careContexts: CareContext[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientLinkReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: PatientLinkReferenceRequestPatient;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}
