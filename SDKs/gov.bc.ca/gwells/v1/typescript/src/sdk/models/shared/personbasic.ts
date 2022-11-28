import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PersonBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=person_guid" })
  personGuid?: string;
}
