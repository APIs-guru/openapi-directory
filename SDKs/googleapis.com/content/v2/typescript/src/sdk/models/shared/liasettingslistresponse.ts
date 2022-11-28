import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiaSettings } from "./liasettings";



export class LiasettingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: LiaSettings })
  resources?: LiaSettings[];
}
