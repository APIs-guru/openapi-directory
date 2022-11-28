import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CareContextDefinition } from "./carecontextdefinition";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { Requester } from "./requester";



export class ConsentRequestConsentHip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ConsentRequestConsentHiu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ConsentRequestConsentPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ConsentRequestConsent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContexts", elemType: CareContextDefinition })
  careContexts?: CareContextDefinition[];

  @SpeakeasyMetadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];

  @SpeakeasyMetadata({ data: "json, name=hip" })
  hip?: ConsentRequestConsentHip;

  @SpeakeasyMetadata({ data: "json, name=hiu" })
  hiu: ConsentRequestConsentHiu;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: ConsentRequestConsentPatient;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission: Permission;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: UsePurpose;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester: Requester;
}


export class ConsentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consent" })
  consent: ConsentRequestConsent;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
