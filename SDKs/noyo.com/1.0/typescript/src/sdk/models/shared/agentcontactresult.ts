import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgentContactResultTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}


export class AgentContactResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent_id" })
  agentId: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types: AgentContactResultTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
