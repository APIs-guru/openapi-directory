import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class HiuConsentRequestStatusConsentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentArtefacts", elemType: shared.ConsentArtefactReference })
  consentArtefacts: ConsentArtefactReference[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class HiuConsentRequestStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentRequest" })
  consentRequest?: HiuConsentRequestStatusConsentRequest;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
