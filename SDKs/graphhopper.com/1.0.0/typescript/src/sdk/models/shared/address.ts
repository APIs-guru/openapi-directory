import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddressCurbsideEnum {
    Right = "right",
    Left = "left",
    Any = "any"
}


export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=curbside" })
  curbside?: AddressCurbsideEnum;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId: string;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=street_hint" })
  streetHint?: string;
}
