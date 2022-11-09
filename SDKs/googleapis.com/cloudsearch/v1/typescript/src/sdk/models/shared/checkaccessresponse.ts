import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckAccessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasAccess" })
  hasAccess?: boolean;
}
