import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaCustomAttribute } from "./googleclouddiscoveryenginev1betacustomattribute";
import { GoogleCloudDiscoveryengineV1betaCompletionInfo } from "./googleclouddiscoveryenginev1betacompletioninfo";
import { GoogleCloudDiscoveryengineV1betaDocumentInfo } from "./googleclouddiscoveryenginev1betadocumentinfo";
import { GoogleCloudDiscoveryengineV1betaMediaInfo } from "./googleclouddiscoveryenginev1betamediainfo";
import { GoogleCloudDiscoveryengineV1betaPageInfo } from "./googleclouddiscoveryenginev1betapageinfo";
import { GoogleCloudDiscoveryengineV1betaPanelInfo } from "./googleclouddiscoveryenginev1betapanelinfo";
import { GoogleCloudDiscoveryengineV1betaSearchInfo } from "./googleclouddiscoveryenginev1betasearchinfo";
import { GoogleCloudDiscoveryengineV1betaTransactionInfo } from "./googleclouddiscoveryenginev1betatransactioninfo";
import { GoogleCloudDiscoveryengineV1betaUserInfo } from "./googleclouddiscoveryenginev1betauserinfo";
/**
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudDiscoveryengineV1betaUserEvent extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudDiscoveryengineV1betaCustomAttribute>;
    attributionToken?: string;
    completionInfo?: GoogleCloudDiscoveryengineV1betaCompletionInfo;
    directUserRequest?: boolean;
    documents?: GoogleCloudDiscoveryengineV1betaDocumentInfo[];
    eventTime?: string;
    eventType?: string;
    filter?: string;
    mediaInfo?: GoogleCloudDiscoveryengineV1betaMediaInfo;
    pageInfo?: GoogleCloudDiscoveryengineV1betaPageInfo;
    panel?: GoogleCloudDiscoveryengineV1betaPanelInfo;
    promotionIds?: string[];
    searchInfo?: GoogleCloudDiscoveryengineV1betaSearchInfo;
    sessionId?: string;
    tagIds?: string[];
    transactionInfo?: GoogleCloudDiscoveryengineV1betaTransactionInfo;
    userInfo?: GoogleCloudDiscoveryengineV1betaUserInfo;
    userPseudoId?: string;
}
