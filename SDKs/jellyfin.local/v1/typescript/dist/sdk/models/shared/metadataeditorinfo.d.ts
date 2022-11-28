import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { CountryInfo } from "./countryinfo";
import { CultureDto } from "./culturedto";
import { ExternalIdInfo } from "./externalidinfo";
import { ParentalRating } from "./parentalrating";
export declare class MetadataEditorInfo extends SpeakeasyBase {
    contentType?: string;
    contentTypeOptions?: NameValuePair[];
    countries?: CountryInfo[];
    cultures?: CultureDto[];
    externalIdInfos?: ExternalIdInfo[];
    parentalRatingOptions?: ParentalRating[];
}
