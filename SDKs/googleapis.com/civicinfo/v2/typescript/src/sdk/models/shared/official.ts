import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleAddressType } from "./simpleaddresstype";
import { Channel } from "./channel";
import { GeocodingSummary } from "./geocodingsummary";


// Official
/** 
 * Information about a person holding an elected office.
**/
export class Official extends SpeakeasyBase {
  @Metadata({ data: "json, name=address", elemType: shared.SimpleAddressType })
  address?: SimpleAddressType[];

  @Metadata({ data: "json, name=channels", elemType: shared.Channel })
  channels?: Channel[];

  @Metadata({ data: "json, name=emails" })
  emails?: string[];

  @Metadata({ data: "json, name=geocodingSummaries", elemType: shared.GeocodingSummary })
  geocodingSummaries?: GeocodingSummary[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=phones" })
  phones?: string[];

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=urls" })
  urls?: string[];
}
