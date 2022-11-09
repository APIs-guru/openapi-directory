import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";


// GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey
/** 
 * Specifies how a facet is computed.
**/
export class GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @Metadata({ data: "json, name=contains" })
  contains?: string[];

  @Metadata({ data: "json, name=intervals", elemType: shared.GoogleCloudRetailV2betaInterval })
  intervals?: GoogleCloudRetailV2betaInterval[];

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=prefixes" })
  prefixes?: string[];

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=restrictedValues" })
  restrictedValues?: string[];

  @Metadata({ data: "json, name=returnMinMax" })
  returnMinMax?: boolean;
}
