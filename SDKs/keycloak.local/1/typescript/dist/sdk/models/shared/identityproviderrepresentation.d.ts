import { SpeakeasyBase } from "../../../internal/utils";
export declare class IdentityProviderRepresentation extends SpeakeasyBase {
    addReadTokenRoleOnCreate?: boolean;
    alias?: string;
    config?: Map<string, any>;
    displayName?: string;
    enabled?: boolean;
    firstBrokerLoginFlowAlias?: string;
    internalId?: string;
    linkOnly?: boolean;
    postBrokerLoginFlowAlias?: string;
    providerId?: string;
    storeToken?: boolean;
    trustEmail?: boolean;
}
