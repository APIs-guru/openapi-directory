import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountStatusExampleItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=submittedValue" })
  submittedValue?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=valueOnLandingPage" })
  valueOnLandingPage?: string;
}
