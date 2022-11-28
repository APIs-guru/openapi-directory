import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionConfirmationBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelButtonLabel" })
  cancelButtonLabel: string;

  @SpeakeasyMetadata({ data: "json, name=confirmButtonLabel" })
  confirmButtonLabel: string;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: string;
}
