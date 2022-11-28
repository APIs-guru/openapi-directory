import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleTypePostalAddress
/** 
 * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
**/
export class GoogleTypePostalAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLines" })
  addressLines?: string[];

  @SpeakeasyMetadata({ data: "json, name=administrativeArea" })
  administrativeArea?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients?: string[];

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=sortingCode" })
  sortingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sublocality" })
  sublocality?: string;
}
