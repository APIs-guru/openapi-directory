import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlIntegration } from "./sqlintegration";


// ListSqlIntegrationsResponse
/** 
 * ListSqlIntegrationsResponse is the response message for ListSqlIntegrations method.
**/
export class ListSqlIntegrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sqlIntegrations", elemType: shared.SqlIntegration })
  sqlIntegrations?: SqlIntegration[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
