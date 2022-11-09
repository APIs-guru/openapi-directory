import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Usage } from "./usage";
import { Usage } from "./usage";
import { DualRegional } from "./dualregional";
import { MultiRegional } from "./multiregional";
import { Usage } from "./usage";
import { Usage } from "./usage";
import { Regional } from "./regional";


// CloudStorageWorkload
/** 
 * Specifies usage of Cloud Storage resources.
**/
export class CloudStorageWorkload extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataRetrieval" })
  dataRetrieval?: Usage;

  @Metadata({ data: "json, name=dataStored" })
  dataStored?: Usage;

  @Metadata({ data: "json, name=dualRegion" })
  dualRegion?: DualRegional;

  @Metadata({ data: "json, name=multiRegion" })
  multiRegion?: MultiRegional;

  @Metadata({ data: "json, name=operationA" })
  operationA?: Usage;

  @Metadata({ data: "json, name=operationB" })
  operationB?: Usage;

  @Metadata({ data: "json, name=region" })
  region?: Regional;

  @Metadata({ data: "json, name=storageClass" })
  storageClass?: string;
}
