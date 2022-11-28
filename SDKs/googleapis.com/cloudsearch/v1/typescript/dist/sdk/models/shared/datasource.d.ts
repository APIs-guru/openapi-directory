import { SpeakeasyBase } from "../../../internal/utils";
import { GSuitePrincipal } from "./gsuiteprincipal";
/**
 * Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
**/
export declare class DataSource extends SpeakeasyBase {
    disableModifications?: boolean;
    disableServing?: boolean;
    displayName?: string;
    indexingServiceAccounts?: string[];
    itemsVisibility?: GSuitePrincipal[];
    name?: string;
    operationIds?: string[];
    returnThumbnailUrls?: boolean;
    shortName?: string;
}
