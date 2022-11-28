import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GSuitePrincipal } from "./gsuiteprincipal";



// DataSource
/** 
 * Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableModifications" })
  disableModifications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableServing" })
  disableServing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=indexingServiceAccounts" })
  indexingServiceAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemsVisibility", elemType: GSuitePrincipal })
  itemsVisibility?: GSuitePrincipal[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=returnThumbnailUrls" })
  returnThumbnailUrls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;
}
