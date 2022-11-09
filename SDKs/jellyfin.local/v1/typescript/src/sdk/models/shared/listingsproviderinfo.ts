import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameValuePair } from "./namevaluepair";


export class ListingsProviderInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelMappings", elemType: shared.NameValuePair })
  channelMappings?: NameValuePair[];

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=EnableAllTuners" })
  enableAllTuners?: boolean;

  @Metadata({ data: "json, name=EnabledTuners" })
  enabledTuners?: string[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=KidsCategories" })
  kidsCategories?: string[];

  @Metadata({ data: "json, name=ListingsId" })
  listingsId?: string;

  @Metadata({ data: "json, name=MovieCategories" })
  movieCategories?: string[];

  @Metadata({ data: "json, name=MoviePrefix" })
  moviePrefix?: string;

  @Metadata({ data: "json, name=NewsCategories" })
  newsCategories?: string[];

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PreferredLanguage" })
  preferredLanguage?: string;

  @Metadata({ data: "json, name=SportsCategories" })
  sportsCategories?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=UserAgent" })
  userAgent?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;

  @Metadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}
