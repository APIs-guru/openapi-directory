import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
import { DualRegional } from "./dualregional";
import { MultiRegional } from "./multiregional";
import { Regional } from "./regional";
/**
 * Specifies usage of Cloud Storage resources.
**/
export declare class CloudStorageWorkload extends SpeakeasyBase {
    dataRetrieval?: Usage;
    dataStored?: Usage;
    dualRegion?: DualRegional;
    multiRegion?: MultiRegional;
    operationA?: Usage;
    operationB?: Usage;
    region?: Regional;
    storageClass?: string;
}
