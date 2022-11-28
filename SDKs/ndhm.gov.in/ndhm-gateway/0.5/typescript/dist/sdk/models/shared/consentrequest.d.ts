import { SpeakeasyBase } from "../../../internal/utils";
import { CareContextDefinition } from "./carecontextdefinition";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { Requester } from "./requester";
export declare class ConsentRequestConsentHip extends SpeakeasyBase {
    id: string;
}
export declare class ConsentRequestConsentHiu extends SpeakeasyBase {
    id: string;
}
export declare class ConsentRequestConsentPatient extends SpeakeasyBase {
    id?: string;
}
export declare class ConsentRequestConsent extends SpeakeasyBase {
    careContexts?: CareContextDefinition[];
    hiTypes: HiTypeEnumEnum[];
    hip?: ConsentRequestConsentHip;
    hiu: ConsentRequestConsentHiu;
    patient: ConsentRequestConsentPatient;
    permission: Permission;
    purpose: UsePurpose;
    requester: Requester;
}
export declare class ConsentRequest extends SpeakeasyBase {
    consent: ConsentRequestConsent;
    requestId: string;
    timestamp: Date;
}
