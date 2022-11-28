import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { CountryInfo } from "./countryinfo";
import { CultureDto } from "./culturedto";
import { ExternalIdInfo } from "./externalidinfo";
import { ParentalRating } from "./parentalrating";



export class MetadataEditorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentTypeOptions", elemType: NameValuePair })
  contentTypeOptions?: NameValuePair[];

  @SpeakeasyMetadata({ data: "json, name=Countries", elemType: CountryInfo })
  countries?: CountryInfo[];

  @SpeakeasyMetadata({ data: "json, name=Cultures", elemType: CultureDto })
  cultures?: CultureDto[];

  @SpeakeasyMetadata({ data: "json, name=ExternalIdInfos", elemType: ExternalIdInfo })
  externalIdInfos?: ExternalIdInfo[];

  @SpeakeasyMetadata({ data: "json, name=ParentalRatingOptions", elemType: ParentalRating })
  parentalRatingOptions?: ParentalRating[];
}
