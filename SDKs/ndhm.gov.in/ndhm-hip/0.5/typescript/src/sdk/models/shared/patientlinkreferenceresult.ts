import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { Meta } from "./meta";
import { RequestReference } from "./requestreference";

export enum PatientLinkReferenceResultLinkAuthenticationTypeEnum {
    Direct = "DIRECT"
,    Mediated = "MEDIATED"
}


export class PatientLinkReferenceResultLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationType" })
  authenticationType: PatientLinkReferenceResultLinkAuthenticationTypeEnum;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientLinkReferenceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=link" })
  link?: PatientLinkReferenceResultLink;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}
