import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguagesResource } from "./languagesresource";



export class LanguagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: LanguagesResource })
  languages?: LanguagesResource[];
}
