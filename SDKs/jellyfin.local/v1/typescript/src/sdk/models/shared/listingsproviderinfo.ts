import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";



export class ListingsProviderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelMappings", elemType: NameValuePair })
  channelMappings?: NameValuePair[];

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableAllTuners" })
  enableAllTuners?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnabledTuners" })
  enabledTuners?: string[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=KidsCategories" })
  kidsCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=ListingsId" })
  listingsId?: string;

  @SpeakeasyMetadata({ data: "json, name=MovieCategories" })
  movieCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=MoviePrefix" })
  moviePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=NewsCategories" })
  newsCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredLanguage" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=SportsCategories" })
  sportsCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=UserAgent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}
