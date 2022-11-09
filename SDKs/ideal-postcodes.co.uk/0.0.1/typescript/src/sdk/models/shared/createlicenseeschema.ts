import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateLicenseeDaily } from "./createlicenseedaily";


export class CreateLicenseeSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=daily" })
  daily?: CreateLicenseeDaily;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=postcode" })
  postcode: string;

  @Metadata({ data: "json, name=whitelist" })
  whitelist?: string[];
}
