import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasAccess" })
  hasAccess?: boolean;
}
