import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Organization } from "./organization";


export class CityList extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization: Organization;
}
