import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlIntegration } from "./sqlintegration";



// ListSqlIntegrationsResponse
/** 
 * ListSqlIntegrationsResponse is the response message for ListSqlIntegrations method.
**/
export class ListSqlIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlIntegrations", elemType: SqlIntegration })
  sqlIntegrations?: SqlIntegration[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
