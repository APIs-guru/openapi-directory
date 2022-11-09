import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostalAddress
/** 
 * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
**/
export class PostalAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLines" })
  addressLines?: string[];

  @Metadata({ data: "json, name=administrativeArea" })
  administrativeArea?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=recipients" })
  recipients?: string[];

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=sortingCode" })
  sortingCode?: string;

  @Metadata({ data: "json, name=sublocality" })
  sublocality?: string;
}
