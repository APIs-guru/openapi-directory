import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountStatusExampleItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=submittedValue" })
  submittedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=valueOnLandingPage" })
  valueOnLandingPage?: string;
}
