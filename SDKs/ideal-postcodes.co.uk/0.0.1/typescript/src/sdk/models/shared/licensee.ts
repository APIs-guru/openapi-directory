import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseeDaily } from "./licenseedaily";


export class Licensee extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=daily" })
  daily?: LicenseeDaily;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=whitelist" })
  whitelist?: string[];
}
