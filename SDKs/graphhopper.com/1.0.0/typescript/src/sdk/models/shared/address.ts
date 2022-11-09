import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddressCurbsideEnum {
    Right = "right"
,    Left = "left"
,    Any = "any"
}


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=curbside" })
  curbside?: AddressCurbsideEnum;

  @Metadata({ data: "json, name=lat" })
  lat: number;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=lon" })
  lon: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=street_hint" })
  streetHint?: string;
}
