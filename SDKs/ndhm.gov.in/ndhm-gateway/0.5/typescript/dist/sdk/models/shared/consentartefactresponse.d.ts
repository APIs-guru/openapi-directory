import { SpeakeasyBase } from "../../../internal/utils";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { Requester } from "./requester";
import { ConsentStatusEnum } from "./consentstatusenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare class ConsentArtefactResponseConsentConsentDetailCareContexts extends SpeakeasyBase {
    careContextReference: string;
    patientReference: string;
}
export declare class ConsentArtefactResponseConsentConsentDetailConsentManager extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtefactResponseConsentConsentDetailHip extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtefactResponseConsentConsentDetailHiu extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtefactResponseConsentConsentDetail extends SpeakeasyBase {
    careContexts: ConsentArtefactResponseConsentConsentDetailCareContexts[];
    consentId: string;
    consentManager: ConsentArtefactResponseConsentConsentDetailConsentManager;
    createdAt: Date;
    hiTypes: HiTypeEnumEnum[];
    hip: ConsentArtefactResponseConsentConsentDetailHip;
    hiu: ConsentArtefactResponseConsentConsentDetailHiu;
    patient: ConsentManagerPatientId;
    permission: Permission;
    purpose: UsePurpose;
    requester?: Requester;
    schemaVersion?: string;
}
export declare class ConsentArtefactResponseConsent extends SpeakeasyBase {
    consentDetail: ConsentArtefactResponseConsentConsentDetail;
    signature: string;
    status: ConsentStatusEnum;
}
export declare class ConsentArtefactResponse extends SpeakeasyBase {
    consent?: ConsentArtefactResponseConsent;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
