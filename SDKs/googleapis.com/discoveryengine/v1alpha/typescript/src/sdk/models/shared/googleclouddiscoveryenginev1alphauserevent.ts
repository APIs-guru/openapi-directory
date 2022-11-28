import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaCustomAttribute } from "./googleclouddiscoveryenginev1alphacustomattribute";
import { GoogleCloudDiscoveryengineV1alphaCompletionInfo } from "./googleclouddiscoveryenginev1alphacompletioninfo";
import { GoogleCloudDiscoveryengineV1alphaDocumentInfo } from "./googleclouddiscoveryenginev1alphadocumentinfo";
import { GoogleCloudDiscoveryengineV1alphaMediaInfo } from "./googleclouddiscoveryenginev1alphamediainfo";
import { GoogleCloudDiscoveryengineV1alphaPageInfo } from "./googleclouddiscoveryenginev1alphapageinfo";
import { GoogleCloudDiscoveryengineV1alphaPanelInfo } from "./googleclouddiscoveryenginev1alphapanelinfo";
import { GoogleCloudDiscoveryengineV1alphaSearchInfo } from "./googleclouddiscoveryenginev1alphasearchinfo";
import { GoogleCloudDiscoveryengineV1alphaTransactionInfo } from "./googleclouddiscoveryenginev1alphatransactioninfo";
import { GoogleCloudDiscoveryengineV1alphaUserInfo } from "./googleclouddiscoveryenginev1alphauserinfo";



// GoogleCloudDiscoveryengineV1alphaUserEvent
/** 
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudDiscoveryengineV1alphaUserEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudDiscoveryengineV1alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudDiscoveryengineV1alphaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=completionInfo" })
  completionInfo?: GoogleCloudDiscoveryengineV1alphaCompletionInfo;

  @SpeakeasyMetadata({ data: "json, name=directUserRequest" })
  directUserRequest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1alphaDocumentInfo })
  documents?: GoogleCloudDiscoveryengineV1alphaDocumentInfo[];

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaInfo" })
  mediaInfo?: GoogleCloudDiscoveryengineV1alphaMediaInfo;

  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: GoogleCloudDiscoveryengineV1alphaPageInfo;

  @SpeakeasyMetadata({ data: "json, name=panel" })
  panel?: GoogleCloudDiscoveryengineV1alphaPanelInfo;

  @SpeakeasyMetadata({ data: "json, name=promotionIds" })
  promotionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=searchInfo" })
  searchInfo?: GoogleCloudDiscoveryengineV1alphaSearchInfo;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=transactionInfo" })
  transactionInfo?: GoogleCloudDiscoveryengineV1alphaTransactionInfo;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudDiscoveryengineV1alphaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=userPseudoId" })
  userPseudoId?: string;
}
