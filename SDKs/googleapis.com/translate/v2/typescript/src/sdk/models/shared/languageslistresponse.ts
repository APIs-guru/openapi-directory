import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguagesResource } from "./languagesresource";


export class LanguagesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=languages", elemType: shared.LanguagesResource })
  languages?: LanguagesResource[];
}
