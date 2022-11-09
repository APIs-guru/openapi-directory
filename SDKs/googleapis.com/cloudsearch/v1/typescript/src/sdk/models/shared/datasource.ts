import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GSuitePrincipal } from "./gsuiteprincipal";


// DataSource
/** 
 * Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
**/
export class DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableModifications" })
  disableModifications?: boolean;

  @Metadata({ data: "json, name=disableServing" })
  disableServing?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=indexingServiceAccounts" })
  indexingServiceAccounts?: string[];

  @Metadata({ data: "json, name=itemsVisibility", elemType: shared.GSuitePrincipal })
  itemsVisibility?: GSuitePrincipal[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operationIds" })
  operationIds?: string[];

  @Metadata({ data: "json, name=returnThumbnailUrls" })
  returnThumbnailUrls?: boolean;

  @Metadata({ data: "json, name=shortName" })
  shortName?: string;
}
