import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseeDaily } from "./licenseedaily";



export class Licensee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=daily" })
  daily?: LicenseeDaily;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=whitelist" })
  whitelist?: string[];
}
