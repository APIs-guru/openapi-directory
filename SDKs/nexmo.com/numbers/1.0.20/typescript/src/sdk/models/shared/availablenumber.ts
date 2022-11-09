import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Availablenumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=features" })
  features?: string[];

  @Metadata({ data: "json, name=msisdn" })
  msisdn?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
