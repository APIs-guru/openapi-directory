import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionConfirmationBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelButtonLabel" })
  cancelButtonLabel: string;

  @Metadata({ data: "json, name=confirmButtonLabel" })
  confirmButtonLabel: string;

  @Metadata({ data: "json, name=prompt" })
  prompt: string;
}
