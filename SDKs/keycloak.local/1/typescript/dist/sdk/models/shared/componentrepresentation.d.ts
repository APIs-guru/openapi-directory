import { SpeakeasyBase } from "../../../internal/utils";
import { MultivaluedHashMap } from "./multivaluedhashmap";
export declare class ComponentRepresentation extends SpeakeasyBase {
    config?: MultivaluedHashMap;
    id?: string;
    name?: string;
    parentId?: string;
    providerId?: string;
    providerType?: string;
    subType?: string;
}
