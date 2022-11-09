import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Qualification } from "./qualification";


export class Subactivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=qualification_set", elemType: shared.Qualification })
  qualificationSet?: Qualification[];

  @Metadata({ data: "json, name=registries_subactivity_code" })
  registriesSubactivityCode?: string;
}
