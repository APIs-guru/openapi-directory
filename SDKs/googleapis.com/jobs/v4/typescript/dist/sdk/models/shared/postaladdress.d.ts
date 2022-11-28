import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
**/
export declare class PostalAddress extends SpeakeasyBase {
    addressLines?: string[];
    administrativeArea?: string;
    languageCode?: string;
    locality?: string;
    organization?: string;
    postalCode?: string;
    recipients?: string[];
    regionCode?: string;
    revision?: number;
    sortingCode?: string;
    sublocality?: string;
}
