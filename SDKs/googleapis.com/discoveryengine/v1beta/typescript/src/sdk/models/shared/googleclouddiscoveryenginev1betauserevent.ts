import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaCustomAttribute } from "./googleclouddiscoveryenginev1betacustomattribute";
import { GoogleCloudDiscoveryengineV1betaCompletionInfo } from "./googleclouddiscoveryenginev1betacompletioninfo";
import { GoogleCloudDiscoveryengineV1betaDocumentInfo } from "./googleclouddiscoveryenginev1betadocumentinfo";
import { GoogleCloudDiscoveryengineV1betaMediaInfo } from "./googleclouddiscoveryenginev1betamediainfo";
import { GoogleCloudDiscoveryengineV1betaPageInfo } from "./googleclouddiscoveryenginev1betapageinfo";
import { GoogleCloudDiscoveryengineV1betaPanelInfo } from "./googleclouddiscoveryenginev1betapanelinfo";
import { GoogleCloudDiscoveryengineV1betaSearchInfo } from "./googleclouddiscoveryenginev1betasearchinfo";
import { GoogleCloudDiscoveryengineV1betaTransactionInfo } from "./googleclouddiscoveryenginev1betatransactioninfo";
import { GoogleCloudDiscoveryengineV1betaUserInfo } from "./googleclouddiscoveryenginev1betauserinfo";



// GoogleCloudDiscoveryengineV1betaUserEvent
/** 
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudDiscoveryengineV1betaUserEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudDiscoveryengineV1betaCustomAttribute })
  attributes?: Map<string, GoogleCloudDiscoveryengineV1betaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=completionInfo" })
  completionInfo?: GoogleCloudDiscoveryengineV1betaCompletionInfo;

  @SpeakeasyMetadata({ data: "json, name=directUserRequest" })
  directUserRequest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1betaDocumentInfo })
  documents?: GoogleCloudDiscoveryengineV1betaDocumentInfo[];

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaInfo" })
  mediaInfo?: GoogleCloudDiscoveryengineV1betaMediaInfo;

  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: GoogleCloudDiscoveryengineV1betaPageInfo;

  @SpeakeasyMetadata({ data: "json, name=panel" })
  panel?: GoogleCloudDiscoveryengineV1betaPanelInfo;

  @SpeakeasyMetadata({ data: "json, name=promotionIds" })
  promotionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=searchInfo" })
  searchInfo?: GoogleCloudDiscoveryengineV1betaSearchInfo;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=transactionInfo" })
  transactionInfo?: GoogleCloudDiscoveryengineV1betaTransactionInfo;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudDiscoveryengineV1betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=userPseudoId" })
  userPseudoId?: string;
}
