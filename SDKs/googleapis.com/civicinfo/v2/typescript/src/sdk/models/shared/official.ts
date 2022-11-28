import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleAddressType } from "./simpleaddresstype";
import { Channel } from "./channel";
import { GeocodingSummary } from "./geocodingsummary";



// Official
/** 
 * Information about a person holding an elected office.
**/
export class Official extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address", elemType: SimpleAddressType })
  address?: SimpleAddressType[];

  @SpeakeasyMetadata({ data: "json, name=channels", elemType: Channel })
  channels?: Channel[];

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=geocodingSummaries", elemType: GeocodingSummary })
  geocodingSummaries?: GeocodingSummary[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=phones" })
  phones?: string[];

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: string[];
}
