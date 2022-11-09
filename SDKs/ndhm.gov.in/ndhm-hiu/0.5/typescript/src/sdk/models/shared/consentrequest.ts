import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CareContextDefinition } from "./carecontextdefinition";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { Requester } from "./requester";


export class ConsentRequestConsentHip extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ConsentRequestConsentHiu extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ConsentRequestConsentPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ConsentRequestConsent extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContexts", elemType: shared.CareContextDefinition })
  careContexts?: CareContextDefinition[];

  @Metadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];

  @Metadata({ data: "json, name=hip" })
  hip?: ConsentRequestConsentHip;

  @Metadata({ data: "json, name=hiu" })
  hiu: ConsentRequestConsentHiu;

  @Metadata({ data: "json, name=patient" })
  patient: ConsentRequestConsentPatient;

  @Metadata({ data: "json, name=permission" })
  permission: Permission;

  @Metadata({ data: "json, name=purpose" })
  purpose: UsePurpose;

  @Metadata({ data: "json, name=requester" })
  requester: Requester;
}


export class ConsentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consent" })
  consent: ConsentRequestConsent;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
