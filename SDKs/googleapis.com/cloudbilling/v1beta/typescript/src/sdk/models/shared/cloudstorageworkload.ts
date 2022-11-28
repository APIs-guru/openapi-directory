import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
import { DualRegional } from "./dualregional";
import { MultiRegional } from "./multiregional";
import { Regional } from "./regional";



// CloudStorageWorkload
/** 
 * Specifies usage of Cloud Storage resources.
**/
export class CloudStorageWorkload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataRetrieval" })
  dataRetrieval?: Usage;

  @SpeakeasyMetadata({ data: "json, name=dataStored" })
  dataStored?: Usage;

  @SpeakeasyMetadata({ data: "json, name=dualRegion" })
  dualRegion?: DualRegional;

  @SpeakeasyMetadata({ data: "json, name=multiRegion" })
  multiRegion?: MultiRegional;

  @SpeakeasyMetadata({ data: "json, name=operationA" })
  operationA?: Usage;

  @SpeakeasyMetadata({ data: "json, name=operationB" })
  operationB?: Usage;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Regional;

  @SpeakeasyMetadata({ data: "json, name=storageClass" })
  storageClass?: string;
}
