import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";



export class CityList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: Organization;
}
