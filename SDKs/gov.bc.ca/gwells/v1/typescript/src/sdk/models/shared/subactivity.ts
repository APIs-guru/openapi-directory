import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Qualification } from "./qualification";



export class Subactivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=qualification_set", elemType: Qualification })
  qualificationSet?: Qualification[];

  @SpeakeasyMetadata({ data: "json, name=registries_subactivity_code" })
  registriesSubactivityCode?: string;
}
