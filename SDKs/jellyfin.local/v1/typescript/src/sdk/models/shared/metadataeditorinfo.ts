import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameValuePair } from "./namevaluepair";
import { CountryInfo } from "./countryinfo";
import { CultureDto } from "./culturedto";
import { ExternalIdInfo } from "./externalidinfo";
import { ParentalRating } from "./parentalrating";


export class MetadataEditorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=ContentTypeOptions", elemType: shared.NameValuePair })
  contentTypeOptions?: NameValuePair[];

  @Metadata({ data: "json, name=Countries", elemType: shared.CountryInfo })
  countries?: CountryInfo[];

  @Metadata({ data: "json, name=Cultures", elemType: shared.CultureDto })
  cultures?: CultureDto[];

  @Metadata({ data: "json, name=ExternalIdInfos", elemType: shared.ExternalIdInfo })
  externalIdInfos?: ExternalIdInfo[];

  @Metadata({ data: "json, name=ParentalRatingOptions", elemType: shared.ParentalRating })
  parentalRatingOptions?: ParentalRating[];
}
