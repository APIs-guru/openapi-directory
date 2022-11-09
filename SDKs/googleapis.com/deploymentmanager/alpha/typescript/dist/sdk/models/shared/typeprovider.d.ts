import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CollectionOverride } from "./collectionoverride";
import { Credential } from "./credential";
import { TypeProviderLabelEntry } from "./typeproviderlabelentry";
import { Operation } from "./operation";
import { Options } from "./options";
/**
 * A type provider that describes a service-backed Type.
**/
export declare class TypeProvider extends SpeakeasyBase {
    collectionOverrides?: CollectionOverride[];
    credential?: Credential;
    customCertificateAuthorityRoots?: string[];
    description?: string;
    descriptorUrl?: string;
    id?: string;
    insertTime?: string;
    labels?: TypeProviderLabelEntry[];
    name?: string;
    operation?: Operation;
    options?: Options;
    selfLink?: string;
}
