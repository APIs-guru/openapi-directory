import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewUserRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=entityToken" })
  entityToken?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}
