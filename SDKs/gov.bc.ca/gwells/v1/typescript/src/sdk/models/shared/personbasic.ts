import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PersonBasic extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=person_guid" })
  personGuid?: string;
}
