import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaCustomAttribute } from "./googleclouddiscoveryenginev1alphacustomattribute";
import { GoogleCloudDiscoveryengineV1alphaCompletionInfo } from "./googleclouddiscoveryenginev1alphacompletioninfo";
import { GoogleCloudDiscoveryengineV1alphaDocumentInfo } from "./googleclouddiscoveryenginev1alphadocumentinfo";
import { GoogleCloudDiscoveryengineV1alphaMediaInfo } from "./googleclouddiscoveryenginev1alphamediainfo";
import { GoogleCloudDiscoveryengineV1alphaPageInfo } from "./googleclouddiscoveryenginev1alphapageinfo";
import { GoogleCloudDiscoveryengineV1alphaPanelInfo } from "./googleclouddiscoveryenginev1alphapanelinfo";
import { GoogleCloudDiscoveryengineV1alphaSearchInfo } from "./googleclouddiscoveryenginev1alphasearchinfo";
import { GoogleCloudDiscoveryengineV1alphaTransactionInfo } from "./googleclouddiscoveryenginev1alphatransactioninfo";
import { GoogleCloudDiscoveryengineV1alphaUserInfo } from "./googleclouddiscoveryenginev1alphauserinfo";
/**
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudDiscoveryengineV1alphaUserEvent extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudDiscoveryengineV1alphaCustomAttribute>;
    attributionToken?: string;
    completionInfo?: GoogleCloudDiscoveryengineV1alphaCompletionInfo;
    directUserRequest?: boolean;
    documents?: GoogleCloudDiscoveryengineV1alphaDocumentInfo[];
    eventTime?: string;
    eventType?: string;
    filter?: string;
    mediaInfo?: GoogleCloudDiscoveryengineV1alphaMediaInfo;
    pageInfo?: GoogleCloudDiscoveryengineV1alphaPageInfo;
    panel?: GoogleCloudDiscoveryengineV1alphaPanelInfo;
    promotionIds?: string[];
    searchInfo?: GoogleCloudDiscoveryengineV1alphaSearchInfo;
    sessionId?: string;
    tagIds?: string[];
    transactionInfo?: GoogleCloudDiscoveryengineV1alphaTransactionInfo;
    userInfo?: GoogleCloudDiscoveryengineV1alphaUserInfo;
    userPseudoId?: string;
}
