import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FirstLastNameGeoIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;
}
