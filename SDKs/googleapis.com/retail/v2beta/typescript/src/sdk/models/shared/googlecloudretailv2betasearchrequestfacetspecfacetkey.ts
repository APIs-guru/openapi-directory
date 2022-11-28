import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";



// GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey
/** 
 * Specifies how a facet is computed.
**/
export class GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains?: string[];

  @SpeakeasyMetadata({ data: "json, name=intervals", elemType: GoogleCloudRetailV2betaInterval })
  intervals?: GoogleCloudRetailV2betaInterval[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=prefixes" })
  prefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedValues" })
  restrictedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=returnMinMax" })
  returnMinMax?: boolean;
}
