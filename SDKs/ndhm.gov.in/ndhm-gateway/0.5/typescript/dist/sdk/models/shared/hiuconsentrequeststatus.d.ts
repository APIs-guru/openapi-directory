import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare class HiuConsentRequestStatusConsentRequest extends SpeakeasyBase {
    consentArtefacts?: ConsentArtefactReference[];
    id: string;
    status: ConsentStatusEnum;
}
export declare class HiuConsentRequestStatus extends SpeakeasyBase {
    consentRequest?: HiuConsentRequestStatusConsentRequest;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
