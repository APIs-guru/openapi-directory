import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateLicenseeDaily } from "./createlicenseedaily";



export class UpdateLicenseeSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=daily" })
  daily?: CreateLicenseeDaily;

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=whitelist" })
  whitelist?: string[];
}
