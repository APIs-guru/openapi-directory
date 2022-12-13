import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgentContactEditRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}


export class AgentContactEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: AgentContactEditRequestTypesEnum[];
}
