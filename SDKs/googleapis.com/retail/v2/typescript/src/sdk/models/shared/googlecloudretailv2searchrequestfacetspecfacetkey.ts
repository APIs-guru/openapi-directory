import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2Interval } from "./googlecloudretailv2interval";


// GoogleCloudRetailV2SearchRequestFacetSpecFacetKey
/** 
 * Specifies how a facet is computed.
**/
export class GoogleCloudRetailV2SearchRequestFacetSpecFacetKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @Metadata({ data: "json, name=contains" })
  contains?: string[];

  @Metadata({ data: "json, name=intervals", elemType: shared.GoogleCloudRetailV2Interval })
  intervals?: GoogleCloudRetailV2Interval[];

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
