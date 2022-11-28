import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Availablenumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=msisdn" })
  msisdn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
